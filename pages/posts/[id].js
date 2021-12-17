import React from "react";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import Layout from "../../components/Layout";
import { getPostIds, getPostByIds } from "../../lib/post";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";
import Spinner from "react-bootstrap/Spinner";

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Spinner animation="border" role="status" variant="dark">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Link href="/posts">
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

//lay du lieu kieu tinh phu thuoc vao path param
export const getStaticPaths = async () => {
  const paths = await getPostIds(5);
  console.log(paths);
  return {
    paths,
    fallback: true, // lay post 6-10 lazy load => load truoc 5 post sau do load tiep 5 post con lai
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostByIds(params.id);
  return {
    props: {
      post,
    },
    revalidate: 1, // gioi han thoi gian de load lai  1s
  };
};

export default Post;
