// src/data/mock.js
export const MOCK_TODAY = '2026-10-04';

// Helper to calculate days difference from MOCK_TODAY
export const getDaysDifference = (targetDateStr) => {
  const today = new Date(MOCK_TODAY);
  const target = new Date(targetDateStr);
  const diffTime = target.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const formatDaysRemaining = (expiryDateStr) => {
  const days = getDaysDifference(expiryDateStr);
  if (days < 0) return 'Expired';
  if (days === 0) return 'Expires today';
  if (days <= 30) return `Expires in ${days} days`;
  return `${days} days remaining`;
};

export const MOCK_USER = {
  name: 'Ayush',
  email: 'ayush@example.com',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
  plan: 'Pro Plan',
  memberSince: 'Jan 2024',
};

export const MOCK_STATS = {
  totalPurchases: 12,
  activeWarranties: 8,
  expiringSoon: 2,
  expired: 2,
};

export const MOCK_PURCHASES = [
  {
    id: 'macbook-air-m2',
    name: 'MacBook Air',
    category: 'Laptop',
    brand: 'Apple',
    subTitle: 'Laptop • Apple',
    price: 75000,
    purchaseDate: '2026-01-10',
    purchaseDateFormatted: '10 Jan 2026',
    warrantyPeriod: '1 Year',
    warrantyExpiry: '2027-01-10',
    warrantyExpiryFormatted: '10 Jan 2027',
    seller: 'Croma',
    status: 'Active',
    statusColor: 'green',
    iconType: 'laptop',
    documents: [
      { id: 'doc-1', name: 'Invoice.pdf', size: '2.4 MB', type: 'pdf', uploadedAt: '10 Jan 2026' },
      { id: 'doc-2', name: 'Warranty Card.jpg', size: '1.8 MB', type: 'image', uploadedAt: '10 Jan 2026' },
    ],
    notes: 'Purchased with HDFC credit card discount. Includes 1-year standard AppleCare warranty.',
    serialNumber: 'C02G8721MD6T',
  },
  {
    id: 'sony-wh-ch520',
    name: 'Sony WH-CH520',
    category: 'Headphones',
    brand: 'Sony',
    subTitle: 'Headphones • Sony',
    price: 4999,
    purchaseDate: '2025-10-22',
    purchaseDateFormatted: '22 Oct 2025',
    warrantyPeriod: '1 Year',
    warrantyExpiry: '2026-10-22',
    warrantyExpiryFormatted: '22 Oct 2026',
    seller: 'Amazon India',
    status: 'Expiring',
    statusColor: 'orange',
    iconType: 'headphones',
    documents: [
      { id: 'doc-3', name: 'Amazon_Invoice_Sony.pdf', size: '1.1 MB', type: 'pdf', uploadedAt: '22 Oct 2025' },
    ],
    notes: 'Wireless Bluetooth On-Ear Headphones with Mic. Warranty ends in October 2026.',
    serialNumber: 'SN-WH520-9921',
  },
  {
    id: 'samsung-monitor-27',
    name: 'Samsung Monitor',
    category: 'Monitor',
    brand: 'Samsung',
    subTitle: 'Monitor • Samsung',
    price: 18999,
    purchaseDate: '2026-02-22',
    purchaseDateFormatted: '22 Feb 2026',
    warrantyPeriod: '3 Years',
    warrantyExpiry: '2029-02-22',
    warrantyExpiryFormatted: '22 Feb 2029',
    seller: 'Samsung Store',
    status: 'Active',
    statusColor: 'green',
    iconType: 'monitor',
    documents: [
      { id: 'doc-4', name: 'Samsung_Invoice.pdf', size: '3.0 MB', type: 'pdf', uploadedAt: '22 Feb 2026' },
      { id: 'doc-5', name: 'Extended_Warranty_Doc.pdf', size: '1.2 MB', type: 'pdf', uploadedAt: '22 Feb 2026' },
    ],
    notes: '27-inch 4K UHD IPS Display. 3 years on-site manufacturer warranty.',
    serialNumber: 'SM-LU28R550UQWXXL',
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    category: 'Phone',
    brand: 'Apple',
    subTitle: 'Phone • Apple',
    price: 79900,
    purchaseDate: '2026-01-05',
    purchaseDateFormatted: '05 Jan 2026',
    warrantyPeriod: '1 Year',
    warrantyExpiry: '2027-01-05',
    warrantyExpiryFormatted: '05 Jan 2027',
    seller: 'Apple BKC Store',
    status: 'Active',
    statusColor: 'green',
    iconType: 'phone',
    documents: [
      { id: 'doc-6', name: 'Apple_Store_Invoice.pdf', size: '2.1 MB', type: 'pdf', uploadedAt: '05 Jan 2026' },
    ],
    notes: '128GB Black. Protected with standard 1-year Limited Warranty.',
    serialNumber: 'FF39X481KL',
  },
  {
    id: 'bose-quietcomfort',
    name: 'Bose QuietComfort 45',
    category: 'Headphones',
    brand: 'Bose',
    subTitle: 'Headphones • Bose',
    price: 24900,
    purchaseDate: '2024-05-14',
    purchaseDateFormatted: '14 May 2024',
    warrantyPeriod: '1 Year',
    warrantyExpiry: '2025-05-14',
    warrantyExpiryFormatted: '14 May 2025',
    seller: 'Reliance Digital',
    status: 'Expired',
    statusColor: 'red',
    iconType: 'headphones',
    documents: [
      { id: 'doc-7', name: 'Reliance_Digital_Bill.pdf', size: '1.4 MB', type: 'pdf', uploadedAt: '14 May 2024' },
    ],
    notes: 'Noise Cancelling Headphones. Standard 1 yr warranty has expired.',
    serialNumber: 'BOSE-QC45-8831',
  },
  {
    id: 'keychron-k2',
    name: 'Keychron K2 V2',
    category: 'Accessories',
    brand: 'Keychron',
    subTitle: 'Keyboard • Keychron',
    price: 7499,
    purchaseDate: '2024-08-10',
    purchaseDateFormatted: '10 Aug 2024',
    warrantyPeriod: '1 Year',
    warrantyExpiry: '2025-08-10',
    warrantyExpiryFormatted: '10 Aug 2025',
    seller: 'Keychron India',
    status: 'Expired',
    statusColor: 'red',
    iconType: 'keyboard',
    documents: [
      { id: 'doc-8', name: 'Keychron_Tax_Invoice.pdf', size: '890 KB', type: 'pdf', uploadedAt: '10 Aug 2024' },
    ],
    notes: 'RGB Backlit Wireless Mechanical Keyboard with Gateron Brown switches.',
    serialNumber: 'KC-K2V2-3112',
  },
];

export const MOCK_DOCUMENTS = [
  { id: 'doc-1', title: 'MacBook Air - Invoice.pdf', size: '2.4 MB', type: 'PDF', purchaseName: 'MacBook Air', date: '10 Jan 2026' },
  { id: 'doc-2', title: 'MacBook Air - Warranty Card.jpg', size: '1.8 MB', type: 'JPG', purchaseName: 'MacBook Air', date: '10 Jan 2026' },
  { id: 'doc-3', title: 'Amazon_Invoice_Sony.pdf', size: '1.1 MB', type: 'PDF', purchaseName: 'Sony WH-CH520', date: '22 Oct 2025' },
  { id: 'doc-4', title: 'Samsung_Invoice.pdf', size: '3.0 MB', type: 'PDF', purchaseName: 'Samsung Monitor', date: '22 Feb 2026' },
  { id: 'doc-5', title: 'Extended_Warranty_Doc.pdf', size: '1.2 MB', type: 'PDF', purchaseName: 'Samsung Monitor', date: '22 Feb 2026' },
  { id: 'doc-6', title: 'Apple_Store_Invoice.pdf', size: '2.1 MB', type: 'PDF', purchaseName: 'iPhone 15', date: '05 Jan 2026' },
];

export const MOCK_REVIEWS = [
  {
    name: 'Rahul K.',
    role: 'Student',
    quote: 'ClaimBox has saved me so much time. I no longer have to search for invoices everywhere!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
  }
];
