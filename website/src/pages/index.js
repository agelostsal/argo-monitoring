import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            General Docs <em>(start here)</em>
          </Link>
          <Link
            className="button button--secondary margin-left--lg button--lg"
            to="https://argoeu.github.io/argo-web-api/">
            Web API ↗
          </Link>
          <Link
            className="button button--secondary margin-left--lg button--lg"
            to="https://argoeu.github.io/argo-messaging">
            Messaging ↗
          </Link>
        </div>
        
        
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Learn how ARGO Monitoring stack works">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      
    </Layout>
  );
}
