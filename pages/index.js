import Layout from "../components/Layout";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Link from "next/Link";

export default function Home() {
  return (
    <Layout>
      <Jumbotron>
        <h1>My Next App</h1>
        <p>This is my NextJS app</p>
        <p>
          <Link href="/posts">
            <Button variant="primary">Posts</Button>
          </Link>
        </p>
      </Jumbotron>
    </Layout>
  );
}
