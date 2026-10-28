import './App.css'

const interests = ['운동', '독서', '자기 계발']
const strengths = ['성실함', '끈기', '차분함', '성숙함']

function App() {
  return (
    <>
      <a className="skip-link" href="#main">본문으로 바로가기</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#home" aria-label="나의 포트폴리오 홈">
            <span className="brand-symbol" aria-hidden="true">✳</span> my portfolio<span className="brand-dot">.</span>
          </a>
          <nav aria-label="소개 페이지 메뉴">
            <a href="#interests">관심사</a>
            <a href="#strengths">잘하는 것</a>
            <a href="#learning">배우고 싶은 것</a>
            <a href="#activities">활동과 작품</a>
            <a href="#goals">목표</a>
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero page-width" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> 나를 소개합니다</p>
            <h1 id="hero-title">호기심이 많고<br />새로운 것을 배우는<br /><span className="underlined">우바입니다.</span></h1>
            <p className="hero-description">운동과 독서, 자기 계발에 관심이 있어요.<br />성실함과 끈기로 꾸준히 배우고 성장하고 싶습니다.</p>
            <a className="button button-primary" href="#interests">우바 더 알아보기 <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-grid" />
            <div className="art-card">
              <span className="art-symbol">✳</span>
              <p>차근차근<br />배우고 성장하기</p>
              <div className="art-steps"><i /><i /><i /><i /></div>
            </div>
            <span className="art-label">오늘도 한 걸음</span>
          </div>
        </section>

        <section className="content-section page-width" id="interests" aria-labelledby="interests-title">
          <div className="section-heading">
            <p className="eyebrow">01 / 관심사와 취미</p>
            <h2 id="interests-title">좋아하는 것들<span>.</span></h2>
            <p>제가 관심을 두고 있는 주제예요.</p>
          </div>
          <ul className="tag-list" aria-label="관심사와 취미">
            {interests.map((interest) => <li key={interest}>{interest}</li>)}
          </ul>
        </section>

        <section className="content-section section-tinted" id="strengths" aria-labelledby="strengths-title">
          <div className="page-width">
            <div className="section-heading">
              <p className="eyebrow">02 / 잘하는 것</p>
              <h2 id="strengths-title">나의 강점<span>.</span></h2>
              <p>제가 잘한다고 생각하는 점이에요.</p>
            </div>
            <ul className="strength-list">
              {strengths.map((strength, index) => (
                <li key={strength}><span>{String(index + 1).padStart(2, '0')}</span>{strength}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="content-section page-width" id="learning" aria-labelledby="learning-title">
          <div className="section-heading">
            <p className="eyebrow">03 / 배우고 싶은 것</p>
            <h2 id="learning-title">더 키워 가고 싶은 역량<span>.</span></h2>
            <p>자신의 역량을 키우기 위해 투자와 경제, 돈에 대해 배우고 싶어요.</p>
          </div>
          <ul className="tag-list" aria-label="배우고 싶은 주제">
            <li>역량 키우기</li>
            <li>투자</li>
            <li>경제</li>
            <li>돈</li>
          </ul>
        </section>

        <section className="content-section section-tinted" id="activities" aria-labelledby="activities-title">
          <div className="page-width">
            <div className="section-heading">
              <p className="eyebrow">04 / 활동과 작품</p>
              <h2 id="activities-title">해 본 활동과 작품<span>.</span></h2>
            </div>
            <div className="empty-card">
              <span className="empty-symbol" aria-hidden="true">＋</span>
              <p>아직 소개할 활동이나 작품을 정하지 않았어요.</p>
              <p className="empty-note">나중에 활동이나 작품이 생기면 이곳에 추가할 수 있어요.</p>
            </div>
          </div>
        </section>

        <section className="content-section goal-section page-width" id="goals" aria-labelledby="goals-title">
          <div className="goal-mark" aria-hidden="true">✳</div>
          <div className="section-heading">
            <p className="eyebrow">05 / 앞으로의 목표</p>
            <h2 id="goals-title">경제와 투자를 공부하며<br />나의 역량을 키우기<span>.</span></h2>
            <p>앞으로 이루고 싶은 목표예요.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <a className="wordmark" href="#home">my portfolio<span className="brand-dot">.</span></a>
        <p>소개를 읽어 주셔서 고맙습니다.</p>
        <a className="back-top" href="#home">맨 위로 <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  )
}

export default App
