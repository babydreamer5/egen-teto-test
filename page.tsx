'use client'

import { useState } from 'react'
import { Share2, Download, RefreshCw } from 'lucide-react'

const questions = [
  {
    id: 1,
    question: "친구가 갑자기 만나자고 연락왔을 때 나는?",
    options: [
      { text: "바로 OK! 어디서 만날까?", type: "E", points: 3 },
      { text: "일단 뭐하는지 물어본다", type: "E", points: 1 },
      { text: "오늘은 좀... 다른 날은 어때?", type: "I", points: 3 },
      { text: "핸드폰을 안 본 척한다", type: "I", points: 1 }
    ]
  },
  {
    id: 2,
    question: "인스타 스토리 올리는 빈도는?",
    options: [
      { text: "하루에 10번도 넘게", type: "E", points: 3 },
      { text: "일주일에 2-3번", type: "E", points: 1 },
      { text: "한 달에 한두 번 정도", type: "I", points: 3 },
      { text: "거의 안 올림", type: "I", points: 1 }
    ]
  },
  {
    id: 3,
    question: "새로운 사람들과의 모임에서 나는?",
    options: [
      { text: "먼저 말을 걸고 분위기를 띄운다", type: "E", points: 3 },
      { text: "누군가 말을 걸어주길 기다린다", type: "I", points: 3 },
      { text: "친한 사람 옆에 붙어있는다", type: "I", points: 1 },
      { text: "적당히 대화에 참여한다", type: "E", points: 1 }
    ]
  },
  {
    id: 4,
    question: "스트레스 받을 때 나의 해소법은?",
    options: [
      { text: "친구들과 수다떨기", type: "E", points: 3 },
      { text: "맛있는 거 먹으러 가기", type: "E", points: 1 },
      { text: "혼자만의 시간 갖기", type: "I", points: 3 },
      { text: "넷플릭스 정주행", type: "I", points: 1 }
    ]
  },
  {
    id: 5,
    question: "취미를 고를 때 나는?",
    options: [
      { text: "여러 사람과 함께 하는 것", type: "E", points: 3 },
      { text: "새로운 걸 계속 시도해본다", type: "E", points: 1 },
      { text: "혼자서도 할 수 있는 것", type: "I", points: 3 },
      { text: "한 가지를 깊게 파고든다", type: "I", points: 1 }
    ]
  },
  {
    id: 6,
    question: "주말 계획을 세울 때?",
    options: [
      { text: "친구들과 약속을 잡는다", type: "E", points: 3 },
      { text: "즉흥적으로 정한다", type: "E", points: 1 },
      { text: "미리 계획을 세워둔다", type: "I", points: 1 },
      { text: "아무 계획 없이 쉰다", type: "I", points: 3 }
    ]
  },
  {
    id: 7,
    question: "연애할 때 나의 스타일은?",
    options: [
      { text: "적극적으로 어필한다", type: "E", points: 3 },
      { text: "먼저 친구부터 된다", type: "E", points: 1 },
      { text: "상대방이 다가오길 기다린다", type: "I", points: 3 },
      { text: "관심 있어도 티 안 낸다", type: "I", points: 1 }
    ]
  },
  {
    id: 8,
    question: "쇼핑할 때 나는?",
    options: [
      { text: "친구들과 함께 가서 의견 물어본다", type: "E", points: 3 },
      { text: "트렌드를 많이 따져본다", type: "E", points: 1 },
      { text: "혼자 조용히 둘러본다", type: "I", points: 3 },
      { text: "온라인으로 주문한다", type: "I", points: 1 }
    ]
  },
  {
    id: 9,
    question: "파티나 모임에서 나는?",
    options: [
      { text: "끝까지 남아서 뒷정리도 도와준다", type: "E", points: 3 },
      { text: "적당한 시간에 먼저 나간다", type: "I", points: 3 },
      { text: "분위기에 따라 결정한다", type: "E", points: 1 },
      { text: "일찍 집에 가고 싶다", type: "I", points: 1 }
    ]
  },
  {
    id: 10,
    question: "새로운 앱이나 게임을 발견했을 때?",
    options: [
      { text: "친구들에게 바로 공유한다", type: "E", points: 3 },
      { text: "리뷰를 찾아본다", type: "E", points: 1 },
      { text: "혼자 조용히 해본다", type: "I", points: 3 },
      { text: "관심 없다", type: "I", points: 1 }
    ]
  },
  {
    id: 11,
    question: "고민이 있을 때 나는?",
    options: [
      { text: "친구들과 이야기하며 해결책을 찾는다", type: "E", points: 3 },
      { text: "여러 사람의 조언을 듣는다", type: "E", points: 1 },
      { text: "혼자 생각하며 정리한다", type: "I", points: 3 },
      { text: "일단 시간이 지나기를 기다린다", type: "I", points: 1 }
    ]
  },
  {
    id: 12,
    question: "카페에서 혼자 있을 때 나는?",
    options: [
      { text: "주변 사람들과 자연스럽게 대화한다", type: "E", points: 3 },
      { text: "직원과 친해진다", type: "E", points: 1 },
      { text: "조용히 내 할 일만 한다", type: "I", points: 3 },
      { text: "빨리 나가고 싶다", type: "I", points: 1 }
    ]
  }
]

const results = {
  egen: {
    title: "에겐녀",
    subtitle: "사교적이고 에너지 넘치는 당신!",
    description: "당신은 사람들과 함께 있을 때 에너지가 충전되는 타입이에요. 새로운 사람들과 만나는 것을 좋아하고, 다양한 활동에 관심이 많아요. SNS도 자주 하고, 친구들과의 모임을 주도하는 편이죠!",
    traits: ["사교적", "활발함", "리더십", "트렌드 세터"],
    celebrity: "아이유, 태연, 제니",
    dateStyle: "놀이공원, 핫플레이스 탐방, 친구들과 더블데이트",
    music: "댄스, 팝, 최신 차트곡",
    color: "from-pink-400 to-purple-600"
  },
  teto: {
    title: "테토녀",
    subtitle: "조용한 매력과 깊은 감성의 소유자",
    description: "당신은 혼자만의 시간을 소중히 여기고, 깊이 있는 관계를 선호해요. 트렌드보다는 자신만의 스타일이 있고, 신중하게 행동하는 편이에요. 소수의 진한 친구들과 의미 있는 시간을 보내는 것을 좋아하죠!",
    traits: ["신중함", "감성적", "독립적", "창의적"],
    celebrity: "아이유, 수지, 크리스털",
    dateStyle: "조용한 카페, 영화관, 산책, 북카페",
    music: "인디, 발라드, 어쿠스틱",
    color: "from-blue-400 to-indigo-600"
  }
}

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{type: string, points: number}[]>([])
  const [showResult, setShowResult] = useState(false)
  const [isStarted, setIsStarted] = useState(false)

  const handleAnswer = (option: {type: string, points: number}) => {
    const newAnswers = [...answers, option]
    setAnswers(newAnswers)
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const calculateResult = () => {
    const eScore = answers.filter(a => a.type === 'E').reduce((sum, a) => sum + a.points, 0)
    const iScore = answers.filter(a => a.type === 'I').reduce((sum, a) => sum + a.points, 0)
    
    return eScore > iScore ? 'egen' : 'teto'
  }

  const getPercentage = () => {
    const eScore = answers.filter(a => a.type === 'E').reduce((sum, a) => sum + a.points, 0)
    const iScore = answers.filter(a => a.type === 'I').reduce((sum, a) => sum + a.points, 0)
    const total = eScore + iScore
    
    if (eScore > iScore) {
      return Math.round((eScore / total) * 100)
    } else {
      return Math.round((iScore / total) * 100)
    }
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setIsStarted(false)
  }

  const shareResult = async () => {
    const resultType = calculateResult()
    const percentage = getPercentage()
    const shareText = `나는 ${percentage}% ${results[resultType as keyof typeof results].title}! 너도 테스트해보자 👉`
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: '에겐녀 vs 테토녀 심리테스트',
          text: shareText,
          url: window.location.href,
        })
      } catch (err) {
        console.log('공유 실패:', err)
      }
    } else {
      navigator.clipboard.writeText(`${shareText} ${window.location.href}`)
      alert('링크가 클립보드에 복사되었습니다!')
    }
  }

  const downloadResult = () => {
    const resultType = calculateResult()
    const result = results[resultType as keyof typeof results]
    const percentage = getPercentage()
    
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    canvas.width = 800
    canvas.height = 1000
    
    // 그라데이션 배경
    const gradient = ctx.createLinearGradient(0, 0, 800, 1000)
    if (resultType === 'egen') {
      gradient.addColorStop(0, '#f472b6')
      gradient.addColorStop(1, '#a855f7')
    } else {
      gradient.addColorStop(0, '#60a5fa')
      gradient.addColorStop(1, '#6366f1')
    }
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 800, 1000)
    
    // 텍스트 추가
    ctx.fillStyle = 'white'
    ctx.font = 'bold 48px Arial'
    ctx.textAlign = 'center'
    ctx.fillText('에겐녀 vs 테토녀', 400, 100)
    
    ctx.font = 'bold 64px Arial'
    ctx.fillText(`${percentage}% ${result.title}`, 400, 200)
    
    ctx.font = '24px Arial'
    ctx.fillText(result.subtitle, 400, 250)
    
    // 다운로드
    const link = document.createElement('a')
    link.download = `내-결과-${result.title}.png`
    link.href = canvas.toDataURL()
    link.click()
  }

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full text-center">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              에겐녀 vs 테토녀
            </h1>
            <p className="text-white/80 text-lg mb-2">
              너의 진짜 MBTI 스타일은?
            </p>
            <p className="text-white/60 text-sm">
              12개 질문으로 알아보는 나의 성향 테스트
            </p>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="bg-white/20 rounded-2xl p-4">
              <h3 className="text-white font-semibold mb-2">에겐녀</h3>
              <p className="text-white/80 text-sm">사교적, 에너지 넘침, 관심사 다양</p>
            </div>
            <div className="bg-white/20 rounded-2xl p-4">
              <h3 className="text-white font-semibold mb-2">테토녀</h3>
              <p className="text-white/80 text-sm">조용한 매력, 깊은 감성, 개인주의</p>
            </div>
          </div>
          
          <button
            onClick={() => setIsStarted(true)}
            className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 backdrop-blur-sm border border-white/20"
          >
            테스트 시작하기
          </button>

          {/* 예쁜 푸터 추가 */}
          <div className="mt-12 pt-6 border-t border-white/20">
            <div className="flex justify-center space-x-6 mb-3">
              <a 
                href="/privacy" 
                className="text-white/60 hover:text-white/90 text-xs transition-colors duration-300 hover:scale-105 transform"
              >
                개인정보처리방침
              </a>
              <span className="text-white/40">•</span>
              <a 
                href="/terms" 
                className="text-white/60 hover:text-white/90 text-xs transition-colors duration-300 hover:scale-105 transform"
              >
                이용약관
              </a>
            </div>
            <p className="text-white/40 text-xs font-light">
              ©2025 에겐테토 심리테스트 ✨ Made with 💕
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (showResult) {
    const resultType = calculateResult()
    const result = results[resultType as keyof typeof results]
    const percentage = getPercentage()
    
    return (
      <div className={`min-h-screen bg-gradient-to-br ${result.color} p-4`}>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center">
            <div className="mb-8">
              <h1 className="text-5xl font-bold text-white mb-4">
                {percentage}% {result.title}
              </h1>
              <p className="text-white/90 text-xl mb-4">{result.subtitle}</p>
              <p className="text-white/80 leading-relaxed">{result.description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/20 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-3 text-lg">주요 특징</h3>
                <div className="space-y-2">
                  {result.traits.map((trait, index) => (
                    <span key={index} className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/20 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-3 text-lg">닮은 연예인</h3>
                <p className="text-white/90">{result.celebrity}</p>
              </div>
              
              <div className="bg-white/20 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-3 text-lg">추천 데이트</h3>
                <p className="text-white/90">{result.dateStyle}</p>
              </div>
              
              <div className="bg-white/20 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-3 text-lg">좋아할 음악</h3>
                <p className="text-white/90">{result.music}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={shareResult}
                className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300"
              >
                <Share2 size={20} />
                결과 공유하기
              </button>
              
              <button
                onClick={downloadResult}
                className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300"
              >
                <Download size={20} />
                이미지 저장
              </button>
              
              <button
                onClick={resetTest}
                className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300"
              >
                <RefreshCw size={20} />
                다시 하기
              </button>
            </div>
          </div>

          {/* 예쁜 푸터 추가 */}
          <div className="mt-8 text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="flex justify-center space-x-6 mb-3">
                <a 
                  href="/privacy" 
                  className="text-white/70 hover:text-white text-sm transition-colors duration-300 hover:scale-105 transform"
                >
                  개인정보처리방침
                </a>
                <span className="text-white/50">•</span>
                <a 
                  href="/terms" 
                  className="text-white/70 hover:text-white text-sm transition-colors duration-300 hover:scale-105 transform"
                >
                  이용약관
                </a>
              </div>
              <p className="text-white/50 text-xs">
                ©2025 에겐테토 심리테스트 ✨ Made with 💕
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="max-w-2xl mx-auto">
        {/* 진행률 바 */}
        <div className="mb-8">
          <div className="bg-white/20 rounded-full h-3 mb-4">
            <div 
              className="bg-white rounded-full h-3 transition-all duration-300"
              style={{width: `${((currentQuestion + 1) / questions.length) * 100}%`}}
            />
          </div>
          <p className="text-white/80 text-center">
            {currentQuestion + 1} / {questions.length}
          </p>
        </div>
        
        {/* 질문 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center leading-relaxed">
            {questions[currentQuestion].question}
          </h2>
          
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 text-left backdrop-blur-sm border border-white/20"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>

        {/* 예쁜 푸터 추가 */}
        <div className="mt-8 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4">
            <div className="flex justify-center space-x-4 mb-2">
              <a 
                href="/privacy" 
                className="text-white/60 hover:text-white/90 text-xs transition-colors duration-300"
              >
                개인정보처리방침
              </a>
              <span className="text-white/40">•</span>
              <a 
                href="/terms" 
                className="text-white/60 hover:text-white/90 text-xs transition-colors duration-300"
              >
                이용약관
              </a>
            </div>
            <p className="text-white/40 text-xs">
              ©2025 에겐테토 심리테스트 ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}