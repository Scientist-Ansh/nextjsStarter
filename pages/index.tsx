import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

import { fetcher } from '../utils/fetcher';

import useSWR from 'swr';
import { Todo } from '../utils/todo';

const Home: NextPage = () => {
  const { data, error } = useSWR('/api/todos', fetcher);
  console.log(data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Todo App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h2>All Todos</h2>
        <p>Click on a todo to know more</p>
        <div>
          {data.map((todo: Todo) => (
            <div className="todo" key={todo.id}>
              <Link href={`/todos/${todo.id}`}>
                <a>{todo.name}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .todo {
          margin-bottom: 10px;
          font-size: 1.2em;
        }
        .todo:hover {
          color: blue;
        }
      `}</style>
    </>
  );
};

export default Home;
