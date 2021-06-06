import React from 'react';
import 'twin.macro';
import useTranslate from 'utils/useTranslate';
import Link from 'next/link';

const IndexPage = () => {
  const { HomeData } = useTranslate('home');

  return (
    <div>
      <div tw="flex flex-col justify-center h-full gap-y-5">
        <h1>{HomeData.title}</h1>

        <Link href="/fr">
          <a>fr</a>
        </Link>
        <Link href="/en-US">
          <a>en-GB</a>
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;
