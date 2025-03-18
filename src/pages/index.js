import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <Layout>
      <Intro />
      <Projects />
    </Layout>
  );
}