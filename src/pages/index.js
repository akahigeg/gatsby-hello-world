import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Layout from "../components/layout";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";
import { graphql } from "gatsby";

export default ({ data }) => (
  <Layout>
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <Header />
      <p>Such wow. Very React.</p>
      <h1>Hello Gatsby! {data.site.siteMetadata.title}</h1>
      <Link to="/about">
        <Button>About</Button>
      </Link>
      <h1>Richard Hamming on Luck</h1>
      <div>
        <p>
          From Richard Hamming’s classic and must-read talk, “
          <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
            You and Your Research
          </a>
          ”.
        </p>
        <blockquote>
          <p>
            There is indeed an element of luck, and no, there isn’t. The
            prepared mind sooner or later finds something important and does it.
            So yes, it is luck.{" "}
            <em>
              The particular thing you do is luck, but that you do something is
              not.
            </em>
          </p>
        </blockquote>
      </div>
      <p>Posted April 09, 2011</p>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`