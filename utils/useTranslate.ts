import { useRouter } from 'next/router';

const useTranslate = (path: string) => {
  const { locale } = useRouter();

  const data = require(`data/${locale}/${path}`);

  return data;
};

export default useTranslate;
