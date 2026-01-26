# Google Analytics Enhanced Tracking Implementation

This document outlines all the Google Analytics tracking features implemented in the meet.js Summit 2026 website.

## 📊 Overview

We've implemented comprehensive analytics tracking to better understand user behavior and optimize the website for conversions. All tracking is done using Google Analytics 4 (GA4) with the measurement ID: `G-QLKEEWW472`.

## 🎯 Tracking Features Implemented

### 1. **Scroll Depth Tracking** ✅
**Location:** `src/hooks/useScrollDepthTracking.ts`

Automatically tracks when users scroll to key milestones:
- 25% of page
- 50% of page
- 75% of page
- 100% of page (bottom)

**Benefits:**
- Understand how much content users actually read
- Identify if users are bouncing early
- Optimize content placement based on scroll patterns

**GA4 Event:**
```javascript
{
  action: 'scroll_depth',
  category: 'engagement',
  label: '50%',
  value: 50
}
```

---

### 2. **Time on Page Tracking** ✅
**Location:** `src/hooks/useTimeOnPageTracking.ts`

Tracks how long users spend on the page at key intervals:
- 30 seconds
- 1 minute (60s)
- 2 minutes (120s)
- 5 minutes (300s)

**Benefits:**
- Identify engaged vs. bounced visitors
- Measure content quality and engagement
- Understand user attention span

**GA4 Event:**
```javascript
{
  action: 'time_on_page',
  category: 'engagement',
  label: '60s',
  value: 60
}
```

---

### 3. **Navigation Click Tracking** ✅
**Location:** `src/components/navigation.tsx`

Tracks all navigation menu clicks including:
- CFP
- Sponsor
- Speakers
- Venue
- Contact
- Get your ticket (CTA button)
- Logo (scroll to top)

**Benefits:**
- Understand which sections users are most interested in
- Optimize navigation based on popular sections
- Measure CTA effectiveness

**GA4 Event:**
```javascript
{
  action: 'navigation_click',
  category: 'navigation',
  label: 'Speakers'
}
```

---

### 4. **Outbound Link Tracking** ✅
**Location:** `src/components/partners-logos.tsx`, `src/components/outbound-link.tsx`

Tracks clicks to external websites:
- Partner/sponsor logo clicks
- Social media links
- External resources

**Benefits:**
- Measure partner/sponsor engagement
- Validate sponsorship value with click data
- Track referral effectiveness

**GA4 Event:**
```javascript
{
  action: 'click',
  category: 'outbound_link',
  label: 'Partner: JetBrains',
  outbound_url: 'https://www.jetbrains.com'
}
```

---

### 5. **E-commerce Tracking** ✅

#### 5a. View Item (Ticket Visibility)
**Location:** `src/components/ticket-variant.tsx`

Tracks when ticket cards become visible in the viewport (50% threshold).

**Benefits:**
- Measure ticket interest before clicks
- Understand conversion funnel from view → click → purchase
- Identify which tickets get the most attention

**GA4 Event:**
```javascript
{
  action: 'view_item',
  category: 'ecommerce',
  label: 'VIP Ticket',
  value: 499,
  currency: 'PLN',
  items: [{ item_name: 'VIP Ticket', price: 499, currency: 'PLN' }]
}
```

#### 5b. Begin Checkout
**Location:** `src/components/ticket-variant.tsx`

Tracks when users click "Get your ticket!" button.

**GA4 Event:**
```javascript
{
  action: 'begin_checkout',
  category: 'ecommerce',
  label: 'VIP Ticket',
  value: 499,
  items: [{ item_name: 'VIP Ticket', price: 499, currency: 'PLN' }]
}
```

#### 5c. Purchase Completion
**Location:** `src/components/thank-you.tsx`

Tracks successful purchases on the thank-you page.

**GA4 Event:**
```javascript
{
  action: 'purchase',
  category: 'ecommerce',
  transaction_id: 'ORDER_12345',
  value: 499,
  currency: 'PLN',
  items: [{ item_name: 'VIP Ticket', price: 499, quantity: 1, currency: 'PLN' }]
}
```

---

### 6. **Sponsorship Interest Tracking** ✅
**Location:** `src/components/partners.tsx`

Tracks sponsorship-related actions:
- Sponsor offer PDF downloads
- Contact email clicks

**Benefits:**
- Measure sponsorship interest
- Track conversion funnel for sponsors
- Optimize sponsor acquisition process

**GA4 Events:**
```javascript
// PDF Download
{
  action: 'download',
  category: 'sponsorship',
  label: 'Sponsor Offer PDF'
}

// Contact Click
{
  action: 'click',
  category: 'sponsorship',
  label: 'Contact Email'
}
```

---

### 7. **Error Tracking** ✅
**Location:** `src/hooks/useErrorTracking.ts`

Automatically tracks JavaScript errors and unhandled promise rejections.

**Benefits:**
- Identify technical issues users encounter
- Proactively fix bugs
- Improve user experience

**GA4 Event:**
```javascript
{
  action: 'error',
  category: 'technical',
  label: 'TypeError: Cannot read property...',
  error_type: 'javascript_error'
}
```

---

## 📈 How to View Analytics Data

### In Google Analytics 4:

1. **Engagement Metrics:**
   - Go to Reports → Engagement → Events
   - Filter by category: `engagement`
   - View scroll_depth and time_on_page events

2. **Navigation Patterns:**
   - Go to Reports → Engagement → Events
   - Filter by category: `navigation`
   - See which sections are most popular

3. **E-commerce Funnel:**
   - Go to Reports → Monetization → E-commerce purchases
   - View the funnel: view_item → begin_checkout → purchase
   - Analyze drop-off rates at each step

4. **Partner Engagement:**
   - Go to Reports → Engagement → Events
   - Filter by category: `outbound_link`
   - See which partners get the most clicks

5. **Technical Issues:**
   - Go to Reports → Engagement → Events
   - Filter by category: `technical`
   - Monitor error rates and types

---

## 🛠️ Utility Functions

All tracking functions are available in `src/utils/gtag.ts`:

```typescript
// Basic event tracking
gtag.event({ action, category, label, value })

// Specialized tracking functions
gtag.trackScrollDepth(percentage)
gtag.trackNavigation(sectionName)
gtag.trackOutboundLink(url, label)
gtag.trackViewItem({ itemName, price, currency })
gtag.trackFormStart(formName)
gtag.trackFormSubmit(formName)
gtag.trackFormAbandon(formName, fieldName)
gtag.trackTimeOnPage(seconds)
gtag.trackError(errorMessage, errorType)
gtag.trackSocialShare(platform, url)
gtag.trackSectionView(sectionName)
```

---

## 🎨 Custom Hooks

Three custom React hooks are available for automatic tracking:

```typescript
import { useScrollDepthTracking } from '@/hooks/useScrollDepthTracking';
import { useTimeOnPageTracking } from '@/hooks/useTimeOnPageTracking';
import { useErrorTracking } from '@/hooks/useErrorTracking';

// In your component
function MyComponent() {
  useScrollDepthTracking();  // Auto-tracks scroll depth
  useTimeOnPageTracking();   // Auto-tracks time milestones
  useErrorTracking();        // Auto-tracks errors
  
  return <div>...</div>;
}
```

---

## 🔮 Future Enhancements (Not Yet Implemented)

These features can be added in the future:

1. **Form Interaction Tracking**
   - CFP form starts, completions, and abandonment
   - Field-level interaction tracking

2. **Video Engagement** (if videos are added)
   - Play, pause, completion tracking
   - Engagement depth

3. **Photo Slider Interactions**
   - Image views and navigation
   - Engagement with gallery

4. **Performance Metrics**
   - Core Web Vitals (LCP, FID, CLS)
   - Page load times

5. **Custom User Properties**
   - Ticket type purchased
   - Returning vs. new visitor
   - Geographic segmentation

---

## 📊 Key Metrics to Monitor

### Engagement Metrics:
- Average scroll depth
- Average time on page
- Bounce rate (users who don't scroll past 25%)

### Conversion Metrics:
- Ticket view → click conversion rate
- Click → purchase conversion rate
- Overall conversion funnel

### Navigation Metrics:
- Most popular sections
- Navigation patterns
- CTA click-through rate

### Partner Metrics:
- Partner click-through rate by tier (Gold, Silver, etc.)
- Sponsorship interest (PDF downloads + contact clicks)

### Technical Metrics:
- Error rate
- Error types and frequency

---

## 🚀 Implementation Status

| Feature | Status | Priority |
|---------|--------|----------|
| Scroll Depth Tracking | ✅ Implemented | High |
| Time on Page Tracking | ✅ Implemented | High |
| Navigation Click Tracking | ✅ Implemented | High |
| Outbound Link Tracking | ✅ Implemented | High |
| View Item Events | ✅ Implemented | High |
| Begin Checkout Tracking | ✅ Implemented | High |
| Purchase Tracking | ✅ Implemented | High |
| Error Tracking | ✅ Implemented | Medium |
| Sponsorship Tracking | ✅ Implemented | Medium |
| Form Interaction Tracking | ⏳ Future | Medium |
| Video Engagement | ⏳ Future | Low |
| Performance Metrics | ⏳ Future | Low |

---

## 📝 Notes

- All tracking respects user privacy and follows GDPR guidelines
- Events are only sent when gtag is properly loaded
- Tracking is non-blocking and won't affect page performance
- All hooks use passive event listeners for optimal performance
- Each milestone is tracked only once per session to avoid duplicate events

---

**Last Updated:** January 26, 2026
**Implemented By:** Antigravity AI Assistant
