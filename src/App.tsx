/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Compass, Library as LibraryIcon, User, Search, ChevronLeft, Share2, Shuffle, SkipBack, Play, Pause, SkipForward, Repeat, Music2, ListMusic, Sliders, Timer, Bell, MoreHorizontal, PlayCircle, Heart } from 'lucide-react';
import { TRACKS, PLAYLISTS, CATEGORIES, RADIO_STATIONS, PODCASTS } from './constants';
import { Track } from './types';

// Types for navigation
type Screen = 'home' | 'explore' | 'library' | 'player';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('home');
  const [currentTrack, setCurrentTrack] = useState<Track>(TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [previousScreen, setPreviousScreen] = useState<Screen>('home');

  const navigateTo = (screen: Screen) => {
    setPreviousScreen(activeScreen);
    setActiveScreen(screen);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="relative min-h-screen bg-background text-on-background overflow-x-hidden selection:bg-secondary-container selection:text-on-secondary">
      {/* Dynamic Background for Player */}
      <AnimatePresence>
        {activeScreen === 'player' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `url(${currentTrack.coverUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(60px)'
            }}
          />
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="relative z-10 w-full min-h-screen pb-24 md:pb-0">
        <AnimatePresence mode="wait">
          {activeScreen === 'home' && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <HomeScreen onNavigate={navigateTo} onPlayTrack={(t) => { setCurrentTrack(t); navigateTo('player'); }} />
            </motion.div>
          )}
          {activeScreen === 'explore' && (
            <motion.div key="explore" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <ExploreScreen onNavigate={navigateTo} />
            </motion.div>
          )}
          {activeScreen === 'library' && (
            <motion.div key="library" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <LibraryScreen onNavigate={navigateTo} />
            </motion.div>
          )}
          {activeScreen === 'player' && (
            <motion.div key="player" initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed inset-0 z-[60]">
              <PlayerScreen 
                track={currentTrack} 
                isPlaying={isPlaying} 
                onTogglePlay={togglePlay} 
                onBack={() => navigateTo(previousScreen)} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Navigation Bars */}
      <TopAppBar activeScreen={activeScreen} onNavigate={navigateTo} />
      <BottomNavBar activeScreen={activeScreen} onNavigate={navigateTo} />
    </div>
  );
}

// --- Sub-components ---

function TopAppBar({ activeScreen, onNavigate }: { activeScreen: Screen, onNavigate: (s: Screen) => void }) {
  if (activeScreen === 'player') return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur-xl h-20 flex items-center justify-between px-container-mobile md:px-container-desktop">
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-full overflow-hidden hover:opacity-80 transition-opacity">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgp6h1qQ_DAeBXiaFbxuzNsq-7p7MitcfGcUXomc8lH54hl-F8uGoKn3DGpqsDK6AG0ALjt3NLUa4lcs2C0SzivVlGBulLNNALUyFa7pHEm8S0ZeqV6qjoHggQ5DVTNvxta3DWSlSgMuLYZwioV7mW3-X_HNmyAt0NsM9IgIuBBpUoMeiHssn81MFdI2bBSkFZ5xSZeb-tvKY1DskqXzHdPRHdl0553BLhTchvJNVj4-RnPVt_jNRPKbMR-jehgrHTCVy7jCeiLLg" 
            alt="User" 
            className="w-full h-full object-cover"
          />
        </button>
        <h1 
          className="text-display-lg font-semibold tracking-tighter text-primary cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          Pure
        </h1>
      </div>
      <button className="w-10 h-10 flex items-center justify-center text-primary rounded-full hover:bg-surface-container-low transition-colors">
        <Search size={24} />
      </button>
    </header>
  );
}

function BottomNavBar({ activeScreen, onNavigate }: { activeScreen: Screen, onNavigate: (s: Screen) => void }) {
  if (activeScreen === 'player') return null;

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'library', label: 'Library', icon: LibraryIcon },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass rounded-t-3xl shadow-lg md:hidden">
      <div className="flex justify-around items-center pt-3 pb-8 px-4">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => id !== 'profile' && onNavigate(id as Screen)}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all ${
              activeScreen === id ? 'bg-secondary-container/20 text-secondary' : 'text-on-surface-variant'
            }`}
          >
            <Icon size={24} fill={activeScreen === id ? "currentColor" : "none"} />
            <span className="text-[10px] font-semibold uppercase">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

// --- Screen Components ---

function ScreenWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="pt-24 px-container-mobile md:px-container-desktop max-w-7xl mx-auto w-full pb-12"
    >
      {children}
    </motion.div>
  );
}

function HomeScreen({ onNavigate, onPlayTrack }: { onNavigate: (s: Screen) => void, onPlayTrack: (t: Track) => void }) {
  return (
    <ScreenWrapper>
      <div className="flex flex-col gap-12">
        <header>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary">Good Morning, Alex</h2>
          <p className="text-body-lg text-on-surface-variant mt-1">Discover your next obsession.</p>
        </header>

        {/* Featured Section */}
        <section 
          className="relative group cursor-pointer overflow-hidden rounded-[24px] ambient-shadow aspect-[4/5] md:aspect-[21/9]"
          onClick={() => onPlayTrack(TRACKS[0])}
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGtM8ar5klohiDpGhXghMPGRWT-fNllUmL9zUAYQczgdp8vsJNhq1vaGM0bhw5jchiV-3sJVooHywolQW5DnbjW4ABM3z2lmtidqrSpJWQdk9MK5sLJamCT-EAyjHPe0NoWYBQUVN8M39NXw4GecOV8kO4OgqLRq9y-6OcRRMH4KYL3WCpB9X2QCjAjanu9114_yps4nfrqzq9x0CbbPmCunss4MfJu2eDW1oNV29heQ5zAy1uA5UmJ9JZaEuh7hz9Rur3CkEHGTM" 
            alt="Featured" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-white/90 to-transparent backdrop-blur-sm">
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">New Release</span>
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mt-1">Ethereal Echoes</h3>
            <p className="text-on-surface-variant">By The Luminary Quartet</p>
          </div>
        </section>

        {/* For You */}
        <section>
          <h3 className="text-xl font-semibold text-primary mb-6">For You</h3>
          <div className="flex overflow-x-auto no-scrollbar gap-6 -mx-container-mobile px-container-mobile">
            {PLAYLISTS.map(p => (
              <div key={p.id} className="min-w-[200px] flex flex-col gap-3 group cursor-pointer">
                <div className="w-full aspect-square rounded-[24px] overflow-hidden ambient-shadow relative">
                  <img src={p.coverUrl} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <PlayCircle className="text-white w-12 h-12" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary truncate">{p.name}</h4>
                  <p className="text-sm text-on-surface-variant">Curated for you</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trending & Browse */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <section className="lg:col-span-7">
            <h3 className="text-xl font-semibold text-primary mb-6">Trending Now</h3>
            <div className="space-y-2">
              {TRACKS.slice(1, 4).map(t => (
                <div key={t.id} onClick={() => onPlayTrack(t)} className="flex items-center gap-4 p-2 rounded-xl hover:bg-white hover:ambient-shadow transition-all group cursor-pointer">
                  <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                    <img src={t.coverUrl} alt={t.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-medium text-primary">{t.title}</h4>
                    <p className="text-sm text-on-surface-variant">{t.artist}</p>
                  </div>
                  <button className="text-outline hover:text-secondary p-2"><MoreHorizontal size={20} /></button>
                </div>
              ))}
            </div>
          </section>
          
          <section className="lg:col-span-5">
            <h3 className="text-xl font-semibold text-primary mb-6">Browse</h3>
            <div className="grid grid-cols-2 gap-4">
              {CATEGORIES.map(c => (
                <div key={c.id} className={`p-6 rounded-[24px] bg-gradient-to-br ${c.gradient} aspect-[4/3] flex items-end hover:scale-[1.02] transition-transform cursor-pointer`}>
                  <span className="font-semibold text-primary">{c.name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </ScreenWrapper>
  );
}

function ExploreScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  return (
    <ScreenWrapper>
      <div className="flex flex-col gap-12">
        <header>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary">Discover</h2>
        </header>

        <section>
          <h3 className="text-xl font-semibold text-primary flex items-center gap-2 mb-6">
            <Music2 fill="currentColor" size={20} className="text-secondary" /> Live Radio
          </h3>
          <div className="flex overflow-x-auto no-scrollbar gap-8 -mx-container-mobile px-container-mobile">
            {RADIO_STATIONS.map(s => (
              <div key={s.id} className="flex flex-col items-center gap-3 group cursor-pointer min-w-[120px]">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ambient-shadow group-hover:scale-105 transition-transform duration-300">
                  <img src={s.coverUrl} alt={s.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-semibold text-center">{s.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-primary">Popular Podcasts</h3>
            <button className="text-xs font-bold text-secondary uppercase hover:text-primary">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PODCASTS.map(p => (
              <div key={p.id} className="flex gap-4 p-4 rounded-xl bg-white border border-surface-container-high hover:ambient-shadow transition-all group cursor-pointer">
                <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden">
                  <img src={p.coverUrl} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-center gap-1">
                  <span className="text-[10px] font-bold text-secondary uppercase">{p.category}</span>
                  <h4 className="font-semibold text-sm leading-tight line-clamp-2">{p.title}</h4>
                  <p className="text-xs text-on-surface-variant line-clamp-2 mt-1">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-primary mb-4">Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="bg-surface-container p-6 rounded-2xl flex items-center justify-between group hover:bg-surface-container-high transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm"><Timer size={24} /></div>
                <div className="text-left">
                  <h4 className="font-semibold">Sleep Timer</h4>
                  <p className="text-sm text-on-surface-variant">Off</p>
                </div>
              </div>
              <ChevronLeft className="rotate-180 text-outline" />
            </button>
            <button className="bg-surface-container p-6 rounded-2xl flex items-center justify-between group hover:bg-surface-container-high transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm"><Bell size={24} /></div>
                <div className="text-left">
                  <h4 className="font-semibold">Wake-up Alarm</h4>
                  <p className="text-sm text-on-surface-variant">Not set</p>
                </div>
              </div>
              <ChevronLeft className="rotate-180 text-outline" />
            </button>
          </div>
        </section>
      </div>
    </ScreenWrapper>
  );
}

function LibraryScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const [activeTab, setActiveTab] = useState<'Playlists' | 'Artists' | 'Albums'>('Playlists');

  return (
    <ScreenWrapper>
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-6 border-b border-surface-variant pb-2">
          {['Playlists', 'Artists', 'Albums'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`pb-2 transition-all font-semibold ${activeTab === tab ? 'border-b-2 border-primary text-primary' : 'text-on-surface-variant'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Liked Songs Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary-fixed to-surface-container-highest p-8 min-h-[220px] flex flex-col justify-end group cursor-pointer shadow-lg hover:ambient-shadow transition-all">
          <div className="absolute inset-0 bg-white/20 backdrop-blur-md" />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
              <Heart fill="currentColor" />
            </div>
            <h2 className="text-2xl font-semibold text-primary">Liked Songs</h2>
            <p className="text-on-surface-variant">128 tracks • 8 hrs 42 mins</p>
          </div>
        </div>

        <section>
          <h3 className="text-lg font-semibold text-primary mb-4">Recently Played</h3>
          <div className="flex overflow-x-auto no-scrollbar gap-6 -mx-container-mobile px-container-mobile pb-4">
            {TRACKS.map(t => (
              <div key={t.id} className="min-w-[160px] flex flex-col gap-3 group cursor-pointer">
                <div className="aspect-square rounded-[24px] overflow-hidden ambient-shadow">
                  <img src={t.coverUrl} alt={t.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div>
                  <p className="font-semibold text-sm truncate">{t.title}</p>
                  <p className="text-xs text-on-surface-variant truncate">{t.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
           <h3 className="text-lg font-semibold text-primary mb-4">Your Playlists</h3>
           <div className="flex flex-col gap-2">
             {PLAYLISTS.map(p => (
               <div key={p.id} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white hover:ambient-shadow transition-all group cursor-pointer">
                 <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm">
                   <img src={p.coverUrl} alt={p.name} className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-grow">
                   <h4 className="font-semibold text-primary">{p.name}</h4>
                   <p className="text-sm text-on-surface-variant">{p.trackCount} tracks</p>
                 </div>
                 <button className="text-outline hover:text-secondary p-2"><MoreHorizontal size={20} /></button>
               </div>
             ))}
           </div>
        </section>
      </div>
    </ScreenWrapper>
  );
}

function PlayerScreen({ track, isPlaying, onTogglePlay, onBack }: { track: Track, isPlaying: boolean, onTogglePlay: () => void, onBack: () => void }) {
  return (
    <div className="bg-background flex flex-col items-center h-full w-full">
      {/* Top Bar */}
      <header className="w-full h-20 flex items-center justify-between px-container-mobile md:px-container-desktop shrink-0">
        <button onClick={onBack} className="w-12 h-12 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-xl text-primary hover:opacity-80 transition-opacity">
          <ChevronLeft size={24} />
        </button>
        <div className="text-center">
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest block">Now Playing</span>
        </div>
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-xl text-primary hover:opacity-80 transition-opacity">
          <Share2 size={20} />
        </button>
      </header>

      {/* Album Art */}
      <motion.div 
        layoutId={`album-art-${track.id}`}
        className="flex-grow flex flex-col items-center justify-center w-full px-container-mobile py-8"
      >
        <div className="w-full max-w-sm aspect-square rounded-[32px] overflow-hidden shadow-2xl ambient-shadow mb-12">
          <img src={track.coverUrl} alt={track.title} className="w-full h-full object-cover" />
        </div>

        {/* Track Metadata */}
        <div className="text-center mb-10 w-full px-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-primary mb-2 line-clamp-1">{track.title}</h1>
          <h2 className="text-lg md:text-xl font-medium text-secondary line-clamp-1">{track.artist}</h2>
        </div>

        {/* Scrubber */}
        <div className="w-full max-w-sm mb-12 px-4">
          <div className="flex justify-between items-center text-[10px] font-bold text-on-surface-variant mb-2">
            <span>1:24</span>
            <span>{track.duration}</span>
          </div>
          <div className="h-1.5 w-full bg-surface-variant rounded-full relative group cursor-pointer overflow-hidden">
             <div className="absolute left-0 top-0 h-full bg-secondary-container w-1/3 rounded-full" />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 md:gap-10 mb-12">
          <button className="text-on-surface-variant hover:text-primary transition-colors"><Shuffle size={20} /></button>
          <button className="text-primary hover:scale-90 transition-transform"><SkipBack size={32} fill="currentColor" /></button>
          <button 
            onClick={onTogglePlay}
            className="w-20 h-20 flex items-center justify-center rounded-[24px] bg-primary text-white shadow-xl hover:scale-95 transition-all"
          >
            {isPlaying ? <Pause size={40} fill="currentColor" /> : <Play size={40} fill="currentColor" className="ml-1" />}
          </button>
          <button className="text-primary hover:scale-90 transition-transform"><SkipForward size={32} fill="currentColor" /></button>
          <button className="text-on-surface-variant hover:text-primary transition-colors"><Repeat size={20} /></button>
        </div>

        {/* Bottom Actions */}
        <footer className="w-full flex justify-center gap-12 text-on-surface-variant mt-auto pb-12">
          <button className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
            <ListMusic size={20} />
            <span className="text-[10px] font-bold">Queue</span>
          </button>
          <button className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
            <Sliders size={20} />
            <span className="text-[10px] font-bold">Lyrics</span>
          </button>
          <button className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
            <Timer size={20} />
            <span className="text-[10px] font-bold">Timer</span>
          </button>
        </footer>
      </motion.div>
    </div>
  );
}
