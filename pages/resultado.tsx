import { useRouter } from 'next/router';

const Resultado = () => {
  const router = useRouter();
  const { certas, total } = router.query;

  return (
    <div>
      <h1>Resultado</h1>
      <span>{certas} - {total}</span>
    </div>
  );
};

export default Resultado;