import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Dua {
  id: string;
  title: string;
  arabic: string;
  transliteration: string;
  translation: string;
  category: string;
}

interface QuranSection {
  id: string;
  name: string;
  arabicName: string;
  verses: string[];
  translation: string[];
}

const Quran: React.FC = () => {
  // Sample duas data
  const duasData: Dua[] = [
    {
      id: 'dua-1',
      title: 'Dua for Breaking Fast (Iftar)',
      arabic: 'اللهم إني لك صمت وعلى رزقك أفطرت',
      transliteration: "Allahumma inni laka sumtu wa 'ala rizqika aftartu",
      translation: 'O Allah, I fasted for Your sake, and I break my fast with Your provision.',
      category: 'ramadan'
    },
    {
      id: 'dua-2',
      title: 'Dua for Laylatul Qadr',
      arabic: 'اللهم إنك عفو تحب العفو فاعف عني',
      transliteration: "Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni",
      translation: 'O Allah, You are the One Who pardons greatly, and loves to pardon, so pardon me.',
      category: 'ramadan'
    },
    {
      id: 'dua-3',
      title: 'Dua Before Starting the Fast',
      arabic: 'وبصوم غد نويت من شهر رمضان',
      transliteration: 'Wa bisawmi ghadin nawaitu min shahri Ramadan',
      translation: 'I intend to fast tomorrow in this month of Ramadan.',
      category: 'ramadan'
    },
    {
      id: 'dua-4',
      title: 'Dua for Forgiveness',
      arabic: 'رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا',
      transliteration: 'Rabbana ighfir lana dhunubana wa israfana fi amrina',
      translation: 'Our Lord, forgive us our sins and our excesses in our affairs.',
      category: 'general'
    },
    {
      id: 'dua-5',
      title: 'Dua for Parents',
      arabic: 'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
      transliteration: 'Rabbi irhamhuma kama rabbayani saghira',
      translation: 'My Lord, have mercy upon them as they brought me up when I was small.',
      category: 'general'
    }
  ];
  
  // Sample Quran data
  const quranData: QuranSection[] = [
    {
      id: 'quran-1',
      name: 'Surah Al-Fatiha',
      arabicName: 'الفاتحة',
      verses: [
        'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        'الرَّحْمَٰنِ الرَّحِيمِ',
        'مَالِكِ يَوْمِ الدِّينِ',
        'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
        'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ'
      ],
      translation: [
        'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
        'All praise is due to Allah, Lord of the worlds -',
        'The Entirely Merciful, the Especially Merciful,',
        'Sovereign of the Day of Recompense.',
        'It is You we worship and You we ask for help.',
        'Guide us to the straight path -',
        'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.'
      ]
    },
    {
      id: 'quran-2',
      name: 'Surah Al-Ikhlas',
      arabicName: 'الإخلاص',
      verses: [
        'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        'قُلْ هُوَ اللَّهُ أَحَدٌ',
        'اللَّهُ الصَّمَدُ',
        'لَمْ يَلِدْ وَلَمْ يُولَدْ',
        'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ'
      ],
      translation: [
        'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
        'Say, "He is Allah, [who is] One,',
        'Allah, the Eternal Refuge.',
        'He neither begets nor is born,',
        'Nor is there to Him any equivalent."'
      ]
    }
  ];
  
  const [activeTab, setActiveTab] = useState<'quran' | 'duas'>('quran');
  const [duaCategory, setDuaCategory] = useState<string>('all');
  const [activeQuranSection, setActiveQuranSection] = useState<string>(quranData[0].id);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  
  const filteredDuas = duaCategory === 'all'
    ? duasData
    : duasData.filter(dua => dua.category === duaCategory);
  
  const toggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
    // Here you would normally control actual audio playback
  };
  
  return (
    <div className="min-h-screen flex flex-col islamic-pattern-bg">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20 px-4">
        <div className="container mx-auto">
          <header className="mb-10 max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-ramadan-navy dark:text-white mb-4">
              Quran & Duas
            </h1>
            <p className="text-ramadan-navy/70 dark:text-white/70 max-w-2xl mx-auto">
              Enhance your spiritual connection with daily recitations, memorization aids, and powerful duas for Ramadan.
            </p>
          </header>
          
          <div className="max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
              <button
                onClick={() => setActiveTab('quran')}
                className={`py-3 px-6 text-lg font-medium border-b-2 ${
                  activeTab === 'quran'
                    ? 'border-ramadan-gold text-ramadan-gold'
                    : 'border-transparent text-ramadan-navy/60 dark:text-white/60 hover:text-ramadan-navy dark:hover:text-white'
                }`}
              >
                Quran
              </button>
              <button
                onClick={() => setActiveTab('duas')}
                className={`py-3 px-6 text-lg font-medium border-b-2 ${
                  activeTab === 'duas'
                    ? 'border-ramadan-gold text-ramadan-gold'
                    : 'border-transparent text-ramadan-navy/60 dark:text-white/60 hover:text-ramadan-navy dark:hover:text-white'
                }`}
              >
                Duas
              </button>
            </div>
            
            {/* Quran Tab Content */}
            {activeTab === 'quran' && (
              <div className="animate-fade-in">
                <div className="glass-card rounded-xl p-6 overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Quran Sections List */}
                    <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6 md:border-r border-gray-200 dark:border-gray-700">
                      <h3 className="font-display text-lg font-semibold text-ramadan-navy dark:text-white mb-4">
                        Select Surah
                      </h3>
                      <div className="space-y-2 h-96 overflow-y-auto pr-4 scrollbar-hide">
                        {quranData.map(section => (
                          <button
                            key={section.id}
                            onClick={() => setActiveQuranSection(section.id)}
                            className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                              activeQuranSection === section.id
                                ? 'bg-ramadan-gold/10 dark:bg-ramadan-gold/20 text-ramadan-navy dark:text-white'
                                : 'hover:bg-gray-100 dark:hover:bg-white/5 text-ramadan-navy/80 dark:text-white/80'
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <span>{section.name}</span>
                              <span className="font-serif">{section.arabicName}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Quran Content */}
                    <div className="md:w-2/3 md:pl-6">
                      {quranData.filter(section => section.id === activeQuranSection).map(section => (
                        <div key={section.id}>
                          <div className="flex justify-between items-center mb-6">
                            <h3 className="font-display text-xl font-semibold text-ramadan-navy dark:text-white">
                              {section.name}
                            </h3>
                            <button
                              onClick={toggleAudio}
                              className={`p-2 rounded-full transition-colors ${
                                isAudioPlaying
                                  ? 'bg-ramadan-gold text-white'
                                  : 'bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-white/70 hover:bg-gray-200 dark:hover:bg-white/20'
                              }`}
                            >
                              {isAudioPlaying ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <rect x="6" y="4" width="4" height="16"></rect>
                                  <rect x="14" y="4" width="4" height="16"></rect>
                                </svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                              )}
                            </button>
                          </div>
                          
                          <div className="h-96 overflow-y-auto pr-2 scrollbar-hide">
                            {section.verses.map((verse, index) => (
                              <div key={index} className="mb-6">
                                <div className="border-l-4 border-ramadan-gold pl-4 py-1 mb-2">
                                  <p className="font-serif text-right text-xl leading-relaxed text-ramadan-navy dark:text-white">
                                    {verse}
                                  </p>
                                </div>
                                <p className="text-ramadan-navy/70 dark:text-white/70 text-sm">
                                  {section.translation[index]}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Duas Tab Content */}
            {activeTab === 'duas' && (
              <div className="animate-fade-in">
                <div className="mb-6 flex justify-between items-center">
                  <h3 className="font-display text-xl font-semibold text-ramadan-navy dark:text-white">
                    Essential Duas
                  </h3>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setDuaCategory('all')}
                      className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                        duaCategory === 'all'
                          ? 'bg-ramadan-gold text-white'
                          : 'bg-white/70 dark:bg-ramadan-navy/50 text-ramadan-navy/80 dark:text-white/80 hover:bg-white dark:hover:bg-ramadan-navy/70'
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setDuaCategory('ramadan')}
                      className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                        duaCategory === 'ramadan'
                          ? 'bg-ramadan-gold text-white'
                          : 'bg-white/70 dark:bg-ramadan-navy/50 text-ramadan-navy/80 dark:text-white/80 hover:bg-white dark:hover:bg-ramadan-navy/70'
                      }`}
                    >
                      Ramadan
                    </button>
                    <button
                      onClick={() => setDuaCategory('general')}
                      className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                        duaCategory === 'general'
                          ? 'bg-ramadan-gold text-white'
                          : 'bg-white/70 dark:bg-ramadan-navy/50 text-ramadan-navy/80 dark:text-white/80 hover:bg-white dark:hover:bg-ramadan-navy/70'
                      }`}
                    >
                      General
                    </button>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {filteredDuas.map(dua => (
                    <div key={dua.id} className="glass-card rounded-xl p-6">
                      <h4 className="font-display text-lg font-semibold text-ramadan-navy dark:text-white mb-4">
                        {dua.title}
                      </h4>
                      
                      <div className="bg-ramadan-gold/5 dark:bg-white/5 p-4 rounded-lg border border-ramadan-gold/20 dark:border-white/10 mb-4">
                        <p className="font-serif text-right text-xl leading-relaxed text-ramadan-navy dark:text-white">
                          {dua.arabic}
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-medium text-ramadan-navy/70 dark:text-white/70">Transliteration:</span>
                          <p className="text-ramadan-navy dark:text-white italic">{dua.transliteration}</p>
                        </div>
                        
                        <div>
                          <span className="text-sm font-medium text-ramadan-navy/70 dark:text-white/70">Translation:</span>
                          <p className="text-ramadan-navy dark:text-white">{dua.translation}</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-end mt-4">
                        <button className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-white/70 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quran;
