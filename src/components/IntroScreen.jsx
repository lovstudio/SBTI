export default function IntroScreen({ onStart }) {
  return (
    <section className="screen active">
      <div className="hero card hero-minimal">
        <h1>MBTI已经过时，XBTI来了。</h1>
        <div className="hero-actions hero-actions-single">
          <button className="btn-primary" onClick={onStart}>开始测试</button>
        </div>
        <div style={{ paddingTop: '2rem', display: 'flex', flexDirection: 'column' }}>
          <span>
            原作者：
            <a href="https://space.bilibili.com/417038183">B站@蛆肉儿串儿</a>
          </span>
          <span>托管：Cloudflare (免费)</span>
          <span>域名：Spaceship (自费)</span>
        </div>
      </div>
    </section>
  );
}
