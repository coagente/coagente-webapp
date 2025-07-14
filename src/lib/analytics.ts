// Analytics and monitoring configuration

// Define proper types for Web Vitals metrics
interface WebVitalsMetric {
  name: 'CLS' | 'FCP' | 'FID' | 'LCP' | 'TTFB';
  value: number;
  id: string;
  delta: number;
  entries: PerformanceEntry[];
}

// Define error info interface
interface ErrorInfo {
  componentStack?: string;
  errorBoundary?: string;
  errorBoundaryStack?: string;
}

export const analyticsConfig = {
  // Google Analytics 4
  GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
  
  // Performance monitoring
  enablePerformanceMonitoring: process.env.NODE_ENV === 'production',
  
  // Error tracking
  enableErrorTracking: process.env.NODE_ENV === 'production',
  
  // Core Web Vitals tracking
  enableWebVitals: true,
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && analyticsConfig.GA_MEASUREMENT_ID) {
    // gtag('config', analyticsConfig.GA_MEASUREMENT_ID, {
    //   page_path: url,
    // });
  }
};

// Track events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && analyticsConfig.GA_MEASUREMENT_ID) {
    // gtag('event', action, {
    //   event_category: category,
    //   event_label: label,
    //   value: value,
    // });
  }
};

// Core Web Vitals
export const reportWebVitals = (metric: WebVitalsMetric) => {
  if (analyticsConfig.enableWebVitals) {
    // Send to analytics service
    console.log('Web Vitals:', metric);
    
    // Example: Send to Google Analytics
    if (typeof window !== 'undefined' && analyticsConfig.GA_MEASUREMENT_ID) {
      // gtag('event', metric.name, {
      //   event_category: 'Web Vitals',
      //   event_label: metric.id,
      //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      //   non_interaction: true,
      // });
    }
  }
};

// Error tracking
export const trackError = (error: Error, errorInfo?: ErrorInfo) => {
  if (analyticsConfig.enableErrorTracking) {
    console.error('Application Error:', error, errorInfo);
    
    // Send to error tracking service
    // Example: Sentry, LogRocket, etc.
  }
};

// Performance monitoring
export const trackPerformance = (metric: string, value: number) => {
  if (analyticsConfig.enablePerformanceMonitoring) {
    console.log(`Performance ${metric}:`, value);
    
    // Send to performance monitoring service
    // Example: New Relic, DataDog, etc.
  }
}; 