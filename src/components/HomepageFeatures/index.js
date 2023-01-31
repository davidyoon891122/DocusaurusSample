import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '소프트웨어 개발',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        iOS, NodeJS, Spring, Python 등 개발 관련 글을 작성할 예정입니다. 개인 프로젝트, 팀 프로젝트에서 발생한 다양한 기술 노하우 및
        트러블 슈팅 등을 작성합니다.
      </>
    ),
  },
  {
    title: '알고리즘 풀이',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        하루 <b>한</b> 문제 이상의 알고리즘 풀이 과정 및 해설을 작성할 예정입니다. 언어는 <b>Python3</b>, <b>Swift</b> 로 진행할
        예정입니다.
      </>
    ),
  },
  {
    title: '해외 취업 및 이민',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        해외 취업 준비를 위한 영어, 인터뷰 준비 등 다양한 이야기를 작성할 예정입니다.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3441374360512105" crossorigin="anonymous"></script>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
