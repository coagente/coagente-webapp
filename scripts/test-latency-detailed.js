#!/usr/bin/env node

/**
 * Detailed Latency Testing Script for Fly.io Regions
 * Performs 10 tests per region for statistical accuracy
 */

const { execSync } = require('child_process');
const https = require('https');
const { performance } = require('perf_hooks');

// Fly.io regions relevant for Mexico/North America
const regions = [
  { code: 'lax', name: 'Los Angeles, California (US)', endpoint: 'lax.fly.dev' },
  { code: 'qro', name: 'Querétaro, Mexico', endpoint: 'qro.fly.dev' },
  { code: 'gdl', name: 'Guadalajara, Mexico', endpoint: 'gdl.fly.dev' },
  { code: 'dfw', name: 'Dallas, Texas (US)', endpoint: 'dfw.fly.dev' },
  { code: 'phx', name: 'Phoenix, Arizona (US)', endpoint: 'phx.fly.dev' },
  { code: 'mia', name: 'Miami, Florida (US)', endpoint: 'mia.fly.dev' },
  { code: 'sea', name: 'Seattle, Washington (US)', endpoint: 'sea.fly.dev' },
  { code: 'sjc', name: 'San Jose, California (US)', endpoint: 'sjc.fly.dev' },
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
      headers: {
        'User-Agent': 'LatencyTest/1.0'
      }
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

function calculateStats(values) {
  if (values.length === 0) return null;
  
  const sorted = [...values].sort((a, b) => a - b);
  const sum = values.reduce((a, b) => a + b, 0);
  const avg = sum / values.length;
  
  // Calculate standard deviation
  const variance = values.reduce((acc, val) => acc + Math.pow(val - avg, 2), 0) / values.length;
  const stdDev = Math.sqrt(variance);
  
  // Calculate percentiles
  const p25 = sorted[Math.floor(sorted.length * 0.25)];
  const p50 = sorted[Math.floor(sorted.length * 0.50)]; // median
  const p75 = sorted[Math.floor(sorted.length * 0.75)];
  const p95 = sorted[Math.floor(sorted.length * 0.95)];
  
  return {
    count: values.length,
    avg: avg,
    median: p50,
    min: Math.min(...values),
    max: Math.max(...values),
    stdDev: stdDev,
    p25: p25,
    p75: p75,
    p95: p95,
    values: values
  };
}

async function testRegionLatency(region, iterations = 10) {
  console.log(`\n🌍 Testing ${region.name} (${region.code})...`);
  console.log(`   Running ${iterations} tests for statistical accuracy...`);
  
  const tests = [];
  let successCount = 0;
  
  for (let i = 0; i < iterations; i++) {
    process.stdout.write(`   Test ${i + 1}/${iterations}: `);
    
    const latency = await testHttpLatency(region.endpoint);
    if (latency !== null) {
      tests.push(latency);
      successCount++;
      console.log(`${latency.toFixed(2)}ms ✅`);
    } else {
      console.log(`Timeout/Error ❌`);
    }
    
    // Small delay between tests to avoid overwhelming
    if (i < iterations - 1) {
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  }
  
  if (tests.length > 0) {
    const stats = calculateStats(tests);
    
    console.log(`\n   📊 ESTADÍSTICAS (${successCount}/${iterations} exitosos):`);
    console.log(`   ├─ Promedio: ${stats.avg.toFixed(2)}ms`);
    console.log(`   ├─ Mediana:  ${stats.median.toFixed(2)}ms`);
    console.log(`   ├─ Mínimo:   ${stats.min.toFixed(2)}ms`);
    console.log(`   ├─ Máximo:   ${stats.max.toFixed(2)}ms`);
    console.log(`   ├─ Desv Est: ${stats.stdDev.toFixed(2)}ms`);
    console.log(`   ├─ P25:      ${stats.p25.toFixed(2)}ms`);
    console.log(`   ├─ P75:      ${stats.p75.toFixed(2)}ms`);
    console.log(`   └─ P95:      ${stats.p95.toFixed(2)}ms`);
    
    return {
      ...region,
      stats,
      successRate: (successCount / iterations) * 100,
      success: true
    };
  } else {
    console.log(`   ❌ Todos los tests fallaron (0/${iterations})`);
    return {
      ...region,
      success: false,
      successRate: 0
    };
  }
}

function printDetailedResults(results) {
  console.log('\n' + '='.repeat(80));
  console.log('📈 ANÁLISIS DETALLADO DE RESULTADOS');
  console.log('='.repeat(80));
  
  const successfulResults = results.filter(r => r.success);
  
  if (successfulResults.length === 0) {
    console.log('❌ No hay resultados exitosos para analizar.');
    return;
  }
  
  // Sort by average latency
  successfulResults.sort((a, b) => a.stats.avg - b.stats.avg);
  
  console.log('\n🏆 RANKING POR LATENCIA PROMEDIO:');
  console.log('-'.repeat(80));
  
  successfulResults.forEach((result, index) => {
    const emoji = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '📍';
    const stats = result.stats;
    
    console.log(`${emoji} ${result.name}`);
    console.log(`   Código: ${result.code.toUpperCase()}`);
    console.log(`   Promedio: ${stats.avg.toFixed(2)}ms | Mediana: ${stats.median.toFixed(2)}ms`);
    console.log(`   Rango: ${stats.min.toFixed(2)}-${stats.max.toFixed(2)}ms | Éxito: ${result.successRate.toFixed(0)}%`);
    console.log(`   Consistencia: ±${stats.stdDev.toFixed(2)}ms`);
    console.log('');
  });
  
  // Analysis
  const best = successfulResults[0];
  const worst = successfulResults[successfulResults.length - 1];
  
  console.log('🔍 ANÁLISIS:');
  console.log('-'.repeat(80));
  console.log(`✅ MEJOR: ${best.name} (${best.code.toUpperCase()})`);
  console.log(`   └─ Promedio: ${best.stats.avg.toFixed(2)}ms, Consistencia: ±${best.stats.stdDev.toFixed(2)}ms`);
  
  if (successfulResults.length > 1) {
    console.log(`❌ PEOR: ${worst.name} (${worst.code.toUpperCase()})`);
    console.log(`   └─ Promedio: ${worst.stats.avg.toFixed(2)}ms, Consistencia: ±${worst.stats.stdDev.toFixed(2)}ms`);
    
    const improvement = ((worst.stats.avg - best.stats.avg) / worst.stats.avg * 100);
    console.log(`📊 MEJORA: ${best.code.toUpperCase()} es ${improvement.toFixed(1)}% más rápido que ${worst.code.toUpperCase()}`);
  }
  
  // Consistency analysis
  console.log('\n⚡ ANÁLISIS DE CONSISTENCIA:');
  console.log('-'.repeat(80));
  const consistencyResults = [...successfulResults].sort((a, b) => a.stats.stdDev - b.stats.stdDev);
  
  consistencyResults.forEach((result, index) => {
    const emoji = index === 0 ? '🎯' : index === 1 ? '👍' : '📊';
    console.log(`${emoji} ${result.code.toUpperCase()}: ±${result.stats.stdDev.toFixed(2)}ms (${result.stats.stdDev <= 20 ? 'Muy consistente' : result.stats.stdDev <= 50 ? 'Consistente' : 'Variable'})`);
  });
}

async function runDetailedLatencyTests() {
  console.log('🚀 ANÁLISIS DETALLADO DE LATENCIA - FLY.IO REGIONS');
  console.log('=' .repeat(80));
  console.log('Ejecutando 10 tests por región para mayor precisión estadística...\n');
  
  const results = [];
  
  for (const region of regions) {
    const result = await testRegionLatency(region, 10);
    results.push(result);
    
    // Delay between regions to avoid overwhelming
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  printDetailedResults(results);
  
  // Recommendation
  const successfulResults = results.filter(r => r.success);
  if (successfulResults.length > 0) {
    const best = successfulResults.sort((a, b) => a.stats.avg - b.stats.avg)[0];
    
    console.log('\n🎯 RECOMENDACIÓN FINAL:');
    console.log('='.repeat(80));
    console.log(`✅ Usar región: ${best.code.toUpperCase()} (${best.name})`);
    console.log(`📊 Latencia promedio: ${best.stats.avg.toFixed(2)}ms`);
    console.log(`🎯 Consistencia: ±${best.stats.stdDev.toFixed(2)}ms`);
    console.log(`💯 Tasa de éxito: ${best.successRate.toFixed(0)}%`);
    
    if (best.code !== 'lax') {
      console.log(`\n💡 Considera actualizar fly.toml: primary_region = '${best.code}'`);
    } else {
      console.log('\n🎉 ¡LAX ya está configurado como región principal!');
    }
  }
  
  console.log('\n🔬 EXPLICACIÓN TÉCNICA:');
  console.log('='.repeat(80));
  console.log('Las diferencias de latencia pueden deberse a:');
  console.log('• 🌐 Infraestructura de red y routing del ISP');
  console.log('• 🏢 Calidad del datacenter de Fly.io en cada región');
  console.log('• 🔄 Número de saltos de red (hops) entre tu ubicación y el servidor');
  console.log('• 📡 Acuerdos de peering entre proveedores de internet');
  console.log('• ⚡ Congestión de red en rutas específicas');
  console.log('• 🚀 Hardware y optimizaciones específicas de cada región de Fly.io');
}

// Run the detailed test
runDetailedLatencyTests().catch(console.error); 