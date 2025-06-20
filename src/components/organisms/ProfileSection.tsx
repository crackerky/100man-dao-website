"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function ProfileSection() {
  return (
    <section id="profile" className="min-h-screen flex items-center justify-center px-6 lg:px-10 py-[100px] relative">
      <motion.div
        className="max-w-5xl text-center backdrop-blur-sm bg-black/10 p-8 lg:p-15 rounded-3xl border border-white/5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="text-5xl md:text-7xl lg:text-[100px] font-thin mb-12 lg:mb-16 tracking-[0.05em] leading-none"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Hello
        </motion.h2>

        <motion.div
          className="space-y-10 mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-light opacity-90 tracking-wide">
              We&apos;re Million Member DAO
            </h3>
            
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-lg md:text-xl leading-relaxed opacity-80 font-light">
                日本全国の放置された資産を、価値ある資源へと変える
              </p>
              
              <p className="text-base md:text-lg leading-relaxed opacity-75 max-w-3xl mx-auto">
                耕作放棄地、空き家、空地、地方の山林など、活用されていない資産を<br />
                コミュニティの力とAI・OSS技術で再生・価値化します
              </p>
              
              <p className="text-lg md:text-xl font-medium opacity-85 tracking-wide">
                100万人のコミュニティで、日本の遊休資産問題を解決へ
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base opacity-70">
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-blue-400">42万</div>
                <div>ヘクタールの耕作放棄地</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-blue-400">849万</div>
                <div>戸の空き家</div>
              </div>
            </div>
            
            <div className="space-y-4 pt-6">
              <p className="text-base md:text-lg leading-relaxed opacity-75 max-w-3xl mx-auto">
                これらの資産をDAO参加者と共に、農業体験施設、シェアハウス、<br />
                キャンプ場、再生可能エネルギー施設などへと転換
              </p>
              
              <p className="text-sm md:text-base leading-relaxed opacity-65 max-w-2xl mx-auto">
                Discordでの週1イベント開催で、誰でも参加・貢献できるオープンなコミュニティを運営
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Link
            href="#"
            className="inline-flex items-center text-white text-sm md:text-base tracking-wider border-b border-white/50 pb-1 hover:opacity-70 hover:border-white transition-all duration-300"
          >
            <span>詳しく見る</span>
            <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
