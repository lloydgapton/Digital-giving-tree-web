import { useState } from 'react';
import type { Wish, Charity } from '@/lib/data';
import { findImage } from "../lib/data";
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './common/Card';
import { Progress } from './common/progress';
import { Button } from './common/Button';
import DonationDialog from './donation-dialog';
import { Badge } from './common/badge';
import { ArrowRight, Sparkles } from 'lucide-react';

type FeaturedWishProps = {
  wish: Wish;
  charity: Charity;
};

export default function FeaturedWish({ wish, charity }: FeaturedWishProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const progress = (wish.quantityDonated / wish.quantityNeeded) * 100;
  const wishImage = findImage(charity.bannerId);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };
  
  const amountLeft = (wish.quantityNeeded - wish.quantityDonated) * wish.unitPrice;

  return (
    <>
      <section className="mb-12 md:mb-20">
        <Card className="shadow-lg border-t-4 border-accent overflow-hidden animate-breathing-glow">
          <CardHeader className="text-center pb-4">
              <div className="flex justify-center items-center gap-2">
                <Sparkles className="h-6 w-6 text-accent"/>
                <CardTitle className="text-3xl md:text-4xl font-headline font-bold text-primary">Featured Wish</CardTitle>
                <Sparkles className="h-6 w-6 text-accent"/>
              </div>
              <CardDescription className="text-base md:text-lg max-w-3xl mx-auto">
                This wish is so close to being fulfilled! Your contribution can be the one to make it happen.
              </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                <img
                    src={wishImage.imageUrl}
                    alt={wishImage.description}
                    className="object-cover w-full h-full"
                    data-ai-hint={wishImage.imageHint}
                />
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline text-2xl font-bold text-primary">{wish.title}</h3>
                    <Badge variant="secondary">{wish.category}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                    For <Link to={`/charity/${charity.slug}`} className="font-semibold text-primary hover:underline">{charity.name}</Link>
                </p>
                <p className="text-foreground/80 mb-4">{wish.description}</p>
                
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-1 text-sm text-muted-foreground">
                        <span>{formatCurrency(wish.quantityDonated * wish.unitPrice)} raised</span>
                        <span className="font-semibold">{formatCurrency(wish.quantityNeeded * wish.unitPrice)} goal</span>
                    </div>
                    <Progress value={progress} className="h-3" />
                    <p className="text-center text-sm font-medium text-accent mt-2 animate-pulse">Just {formatCurrency(amountLeft)} to go!</p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-lg font-bold text-primary">{formatCurrency(wish.unitPrice)} <span className="text-sm font-normal text-muted-foreground">per item</span></p>
                    <Button onClick={() => setIsDialogOpen(true)} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transform hover:scale-105 transition-transform">
                        Help Complete this Wish <ArrowRight className="ml-2"/>
                    </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <DonationDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        wish={wish}
        charity={charity}
      />
    </>
  );
}