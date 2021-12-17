import React from "react";
import Card from "react-bootstrap/Card";
import Layout from "../../components/Layout";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import { getRandomJokes } from "../../lib/joke";

const Random = ({ joke }) => {
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>Random Joke for today</Card.Title>
          <Card.Text>{joke.value}</Card.Text>
          <Link href="/">
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

// lay du lieu phu thuoc vao moi request nhung tao van tao ra html tinh cho FE nen van tot cho SEO
export const getServerSideProps = async () => {
  const joke = await getRandomJokes();
  //   joke = false;
  if (!joke) {
    return {
      notFound: true,
    };
    // return {
    //   redirect: {
    //     destination: "/posts",
    //     permanent: false,
    //   },
    // };
  }
  return {
    props: {
      joke,
    },
  };
};

export default Random;
