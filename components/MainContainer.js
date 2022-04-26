import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords, title}) => {
  return (
    <>
      <Head>
        <meta keyvords={"meta next users " + keywords}></meta>
        <title>{title || "Homepage NEXT"}</title>
      </Head>
      <div className="navbar">
        <A href="/" text="Home"/>
        <A href="/users" text="Users"/>
      </div>

      <div>{children}</div>

      <style jsx>
        {`
          .navbar {
            background-color: orange;
            padding: 15px;
            display: flex;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
