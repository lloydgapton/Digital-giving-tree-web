import { PlaceHolderImages, type ImagePlaceholder } from './placeholder-images';

export type Wish = {
  id: string;
  title: string;
  description: string;
  quantityNeeded: number;
  quantityDonated: number;
  unitPrice: number;
  category: 'Health' | 'Education' | 'Supplies' | 'Food';
};

export type Charity = {
  id: string;
  slug: string;
  name: string;
  logoId: string;
  bannerId: string;
  missionStatement: string;
  description: string;
  website: string;
  wishes: Wish[];
};

export type ImageWithText = {
  id: string;
  text: string;
};

export const findImage = (id: string): ImagePlaceholder => {
    const image = PlaceHolderImages.find((img) => img.id === id);
    if (!image) {
      return {
        id: 'not-found',
        description: 'Image not found',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C',
        imageHint: 'placeholder',
      };
    }
    return image;
};

export const charities: Charity[] = [
  {
    id: '1',
    slug: 'evergreen-foundation',
    name: 'Evergreen Foundation',
    logoId: 'charity-logo-1',
    bannerId: 'charity-banner-1',
    missionStatement: 'Planting trees and reforesting our planet for a greener tomorrow.',
    description: 'The Evergreen Foundation is dedicated to global reforestation efforts. We work with local communities to plant native tree species, restore ecosystems, and combat climate change one tree at a time. Our projects also focus on environmental education and sustainable living.',
    website: 'https://example.com/evergreen',
    wishes: [
      { id: '1-1', title: 'Sponsor a Sapling', description: 'Fund the growth of a new tree from seed to sapling.', quantityNeeded: 500, quantityDonated: 250, unitPrice: 5, category: 'Supplies' },
      { id: '1-2', title: 'Community Training Workshop', description: 'Equip local volunteers with tree-planting and care skills.', quantityNeeded: 20, quantityDonated: 5, unitPrice: 100, category: 'Education' },
      { id: '1-3', title: 'Watering Cans', description: 'Provide durable watering cans for our nursery volunteers.', quantityNeeded: 100, quantityDonated: 78, unitPrice: 15, category: 'Supplies' },
    ],
  },
  {
    id: '2',
    slug: 'golden-roots-initiative',
    name: 'Golden Roots Initiative',
    logoId: 'charity-logo-2',
    bannerId: 'charity-banner-2',
    missionStatement: 'Nourishing communities through sustainable agriculture and food security programs.',
    description: 'Golden Roots Initiative fights hunger by establishing community gardens and teaching sustainable farming techniques. We believe everyone deserves access to fresh, nutritious food. Our programs empower families to grow their own food and create local food systems.',
    website: 'https://example.com/golden-roots',
    wishes: [
      { id: '2-1', title: 'Heirloom Seed Packets', description: 'Provide a variety of non-GMO seeds for a family garden.', quantityNeeded: 1000, quantityDonated: 450, unitPrice: 10, category: 'Supplies' },
      { id: '2-2', title: 'Gardening Tool Kit', description: 'A starter kit with essential tools for a new gardener.', quantityNeeded: 200, quantityDonated: 150, unitPrice: 50, category: 'Supplies' },
      { id: '2-3', title: 'Organic Fertilizer Bags', description: 'Nourish the soil for a bountiful harvest.', quantityNeeded: 300, quantityDonated: 120, unitPrice: 20, category: 'Food' },
    ],
  },
  {
    id: '3',
    slug: 'community-canopy',
    name: 'Community Canopy',
    logoId: 'charity-logo-3',
    bannerId: 'charity-banner-3',
    missionStatement: 'Providing shelter, support, and a path to stability for those experiencing homelessness.',
    description: 'Community Canopy offers a safe haven for individuals and families without a home. We provide emergency shelter, warm meals, healthcare services, and job counseling to help people get back on their feet. Our goal is to create a supportive canopy of care.',
    website: 'https://example.com/community-canopy',
    wishes: [
      { id: '3-1', title: 'A Night of Shelter', description: 'Provide a safe and warm bed for one person for one night.', quantityNeeded: 3650, quantityDonated: 1200, unitPrice: 25, category: 'Health' },
      { id: '3-2', title: 'Hygiene Kit', description: 'A kit with essentials like a toothbrush, soap, and shampoo.', quantityNeeded: 1000, quantityDonated: 950, unitPrice: 12, category: 'Supplies' },
      { id: '3-3', title: 'Warm Meal', description: 'A nutritious hot meal for a guest at our shelter.', quantityNeeded: 10000, quantityDonated: 6520, unitPrice: 8, category: 'Food' },
    ],
  },
  {
    id: '4',
    slug: 'hope-sprouts',
    name: 'Hope Sprouts',
    logoId: 'charity-logo-4',
    bannerId: 'charity-banner-4',
    missionStatement: 'Cultivating bright futures through early childhood education and developmental support.',
    description: 'Hope Sprouts focuses on the critical early years of a child\'s life. We provide free preschool programs, learning materials, and parental support to underserved communities, ensuring every child has the foundation they need to succeed.',
    website: 'https://example.com/hope-sprouts',
    wishes: [
      { id: '4-1', title: 'Backpack with School Supplies', description: 'Equip a child for their first day of school.', quantityNeeded: 500, quantityDonated: 125, unitPrice: 30, category: 'Education' },
      { id: '4-2', title: 'Storybook for Classroom Library', description: 'Add a new, diverse storybook to our classroom libraries.', quantityNeeded: 1000, quantityDonated: 341, unitPrice: 15, category: 'Education' },
      { id: '4-3', title: 'Healthy Snacks for a Week', description: 'Provide a week of healthy snacks for one preschooler.', quantityNeeded: 2500, quantityDonated: 1800, unitPrice: 20, category: 'Food' },
    ],
  },
  {
    id: '5',
    slug: 'the-giving-grove',
    name: 'The Giving Grove',
    logoId: 'charity-logo-5',
    bannerId: 'charity-banner-5',
    missionStatement: 'Delivering emergency medical supplies and care to crisis zones worldwide.',
    description: 'The Giving Grove is a rapid-response medical aid organization. We deploy teams of doctors, nurses, and logisticians with essential medical supplies to areas affected by natural disasters, conflict, and health crises.',
    website: 'https://example.com/giving-grove',
    wishes: [
      { id: '5-1', title: 'First-Aid Kit', description: 'A comprehensive first-aid kit for a mobile clinic.', quantityNeeded: 300, quantityDonated: 290, unitPrice: 75, category: 'Health' },
      { id: '5-2', title: 'Vaccination for a Child', description: 'Protect a child from preventable diseases.', quantityNeeded: 2000, quantityDonated: 800, unitPrice: 22, category: 'Health' },
      { id: '5-3', title: 'Emergency Blanket', description: 'A thermal blanket for a patient in a crisis situation.', quantityNeeded: 5000, quantityDonated: 3400, unitPrice: 7, category: 'Supplies' },
    ],
  },
];
