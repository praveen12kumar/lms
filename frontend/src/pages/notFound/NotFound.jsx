import React, { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import notfound from '../../assets/notfound.png';

const NotFound = () => {
  const navigate = useNavigate();

  // stable callback + safe fallback if history is short
  const handleGoBack = ()=>{
    navigate(-1);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-800 p-4">
      <Card className="text-center shadow-lg w-full max-w-[420px]">
        <CardHeader>
          {/* semantic heading — h1 is important for accessibility */}
          <CardTitle as="h1" className="text-2xl font-bold mb-2">
            404 — Page not found
          </CardTitle>

          {/* Use width constraints to avoid layout shift and improve responsiveness */}
          {/* decoding + loading attributes improve render performance */}
          <img
            src={notfound}
            alt="Illustration: page not found"
            className="mx-auto w-[180px] md:w-[300px] h-auto rounded-md"
            loading="lazy"
            decoding="async"
            role="img"
          />
        </CardHeader>

        <CardContent>
          <Button
            variant="outline"
            className="mt-2"
            size="lg"
            onClick={handleGoBack}
            aria-label="Go back to previous page"
          >
            Go Back
          </Button>
        </CardContent>
      </Card>
    </main>
  );
};

export default NotFound;
