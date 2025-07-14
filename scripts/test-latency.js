#!/usr/bin/env node

/**
 * Latency Testing Script for Fly.io Regions
 * Tests ping times from current location to various Fly.io regions
 */

const { execSync } = require('child_process');
const https = require('https');
const { performance } = require('perf_hooks');

// Fly.io regions relevant for Mexico/North America
const regions = [
  { code: 'qro', name: 'Querétaro, Mexico', endpoint: 'qro.fly.dev' },
  { code: 'gdl', name: 'Guadalajara, Mexico', endpoint: 'gdl.fly.dev' },
  { code: 'dfw', name: 'Dallas, Texas (US)', endpoint: 'dfw.fly.dev' },
  { code: 'lax', name: 'Los Angeles, California (US)', endpoint: 'lax.fly.dev' },
  { code: 'phx', name: 'Phoenix, Arizona (US)', endpoint: 'phx.fly.dev' },
  { code: 'mia', name: 'Miami, Florida (US)', endpoint: 'mia.fly.dev' },
];

function testHttpLatency(endpoint, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const start = performance.now();
    
    const req = https.request({
      hostname: endpoint,
      port: 443,
      path: '/',
      method: 'HEAD',
      timeout: timeout,
    }, (res) => {
      const end = performance.now();
      resolve(end - start);
    });

    req.on('error', () => {
      resolve(null);
    });

    req.on('timeout', () => {
      req.destroy();
      resolve(null);
    });

    req.end();
  });
}

async function testRegionLatency(region) {
  console.log(`\n🌍 Testing ${region.name} (${region.code})...`);
  
  const tests = [];
  const iterations = 3;
  
  for (let i = 0; i < iterations; i++) {
    const latency = await testHttpLatency(region.endpoint);
    if (latency !== null) {
      tests.push(latency);
      console.log(`  Test ${i + 1}: ${latency.toFixed(2)}ms`);
    } else {
      console.log(`  Test ${i + 1}: Timeout/Error`);
    }
  }
  
  if (tests.length > 0) {
    const avgLatency = tests.reduce((a, b) => a + b, 0) / tests.length;
    const minLatency = Math.min(...tests);
    const maxLatency = Math.max(...tests);
    
    console.log(`  📊 Average: ${avgLatency.toFixed(2)}ms`);
    console.log(`  ⚡ Best: ${minLatency.toFixed(2)}ms`);
    console.log(`  🐌 Worst: ${maxLatency.toFixed(2)}ms`);
    
    return {
      ...region,
      avgLatency,
      minLatency,
      maxLatency,
      success: true
    };
  } else {
    console.log(`  ❌ All tests failed`);
    return {
      ...region,
      success: false
    };
  }
}

async function runLatencyTests() {
  console.log('🚀 Fly.io Region Latency Test');
  console.log('===============================');
  console.log('Testing HTTP latency to various Fly.io regions...\n');
  
  const results = [];
  
  for (const region of regions) {
    const result = await testRegionLatency(region);
    results.push(result);
    
    // Small delay between tests
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Sort results by average latency
  const successfulResults = results.filter(r => r.success);
  successfulResults.sort((a, b) => a.avgLatency - b.avgLatency);
  
  console.log('\n📈 RESULTS SUMMARY');
  console.log('==================');
  
  if (successfulResults.length === 0) {
    console.log('❌ No successful tests. Check your internet connection.');
    return;
  }
  
  successfulResults.forEach((result, index) => {
    const emoji = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '📍';
    console.log(`${emoji} ${result.name}: ${result.avgLatency.toFixed(2)}ms`);
  });
  
  const best = successfulResults[0];
  console.log(`\n✅ RECOMMENDATION: Use region '${best.code}' (${best.name})`);
  console.log(`   Average latency: ${best.avgLatency.toFixed(2)}ms`);
  
  if (best.code === 'qro') {
    console.log('🎉 Great! QRO (Querétaro) is already configured as optimal for Monterrey users.');
  } else {
    console.log(`💡 Consider updating fly.toml: primary_region = '${best.code}'`);
  }
}

// Run the test
runLatencyTests().catch(console.error); 