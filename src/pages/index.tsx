import React from "react";
import Card from "components/Card";
import { Layout } from "components/layout";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { TProblems } from "types";
import { getProblems, ProblemsState } from "store/problems/ProblemsSlice";

export default function Home() {
  const dispatch = useDispatch<any>();
  const state: any = useSelector<ProblemsState>((state) => state.problems);

  React.useEffect(() => {
    dispatch(getProblems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (state?.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title="لیست سوالات">
      <Head>
        <title>خرید و فروش مطمئن خودروی کارکرده | کارنامه</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {(state?.problems as TProblems[]).map(({ id, title, body, date, user, solutions }) => (
        <Card
          key={id}
          id={id}
          title={title}
          body={body}
          date={date}
          avatar={user.avatar}
          type="question"
          props={{
            commentsCount: solutions.length,
          }}
        />
      ))}
    </Layout>
  );
}
