import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { fetcher } from '../../utils/fetcher';

import useSWR from 'swr';

const TodoPage: NextPage = () => {
  const router = useRouter();
  console.log(router);
  const { data, error } = useSWR(`/api/todos/${router.query.id}`, fetcher);
  console.log(data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <>
      <div className="container">
        <Head>
          <title>{data.name}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <button className={data.completed ? 'complete' : 'incomplete'}>
          {data.completed ? 'Complete' : 'Incomplete'}
        </button>
      </div>

      <style jsx>{`
        .container {
          padding: 0 20px;
        }
        .complete {
          padding: 10px;
          background-color: lightgreen;
          border: none;
          outline: none;
          cursor: pointer;
        }
        .incomplete {
          padding: 10px;
          background-color: crimson;
          border: none;
          outline: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default TodoPage;
