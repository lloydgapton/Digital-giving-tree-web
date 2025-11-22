import { charities } from '../lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './common/Card';
import { DollarSign, Gift, HeartHandshake, Leaf } from 'lucide-react';

export default function DonationStats() {
  const stats = charities.reduce(
    (acc, charity) => {
      acc.activeCharities += 1;
      charity.wishes.forEach((wish) => {
        acc.wishesFulfilled += wish.quantityDonated;
        acc.donationsMade += wish.quantityDonated * wish.unitPrice;
      });
      return acc;
    },
    { wishesFulfilled: 0, donationsMade: 0, activeCharities: 0 }
  );

  const statItems = [
    {
      icon: <Gift className="h-8 w-8 text-primary" />,
      title: 'Wishes Fulfilled',
      value: stats.wishesFulfilled.toLocaleString(),
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: 'Donations Made',
      value: `$${stats.donationsMade.toLocaleString()}`,
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-primary" />,
      title: 'Active Charities',
      value: stats.activeCharities.toLocaleString(),
    },
  ];

  return (
    <section className="mb-12 md:mb-20 ">
      <Card className="shadow-lg border-t-4 border-accent" style={{ backgroundColor: 'hsl(var(--card))' }}>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-headline font-bold text-primary" style={{ color: 'hsl(var(--primary))' }}>Our Collective Impact</CardTitle>
          <CardDescription className="text-base md:text-lg max-w-2xl mx-auto">
            Every contribution, big or small, adds to a wave of generosity. Here's a look at what we've achieved together so far.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-6">
            {statItems.map((item) => (
              <div key={item.title} className="group relative flex flex-col items-center text-center p-6 bg-background rounded-lg border-2 border-transparent transition-all duration-300 hover:border-primary hover:scale-105" style={{ color: 'hsl(var(--primary))', backgroundColor: 'hsl(var(--background))'}}>
                <Leaf className="absolute top-2 left-2 h-5 w-5 group-hover:[animation:none]" style={{ color: 'hsl(var(--primary))', animation: 'sway 2s ease-in-out infinite' }}/>
                <div className="p-4 bg-accent/10 rounded-full mb-4">
                  {item.icon}
                </div>
                <p className="text-sm font-medium text-muted-foreground mb-1" style={{ color: 'hsl(var(--muted-foreground))' }}>{item.title}</p>
                <p className="text-4xl font-bold font-headline text-primary">{item.value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}