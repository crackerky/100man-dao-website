"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function ProfileSection() {
  return (
    <section id="profile" className="min-h-screen flex items-center justify-center px-10 py-[100px] relative">
      <motion.div
        className="max-w-4xl text-center backdrop-blur-sm bg-black/10 p-15 rounded-3xl border border-white/5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="text-6xl md:text-8xl lg:text-[120px] font-thin mb-15 tracking-[0.1em]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Hello
        </motion.h2>

        <motion.div
          className="space-y-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed opacity-80">
            We&apos;re Million Member DAO.
            <br /><br />
            日本全国の放置された資産を、価値ある資源へと変える。
            <br /><br />
            耕作放棄地、空き家、空地、地方の山林など、活用されていない資産を
            <br />
            コミュニティの力とAI・OSS技術で再生・価値化します。
            <br /><br />
            100万人のコミュニティで、日本の遊休資産問題を解決へ。
          </p>
        </motion.div>

        <motion.div
          className="mb-15"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-base leading-relaxed opacity-60">
            現在日本には、耕作放棄地が42万ヘクタール、空き家が849万戸存在します。
            <br /><br />
            これらの資産をDAO参加者と共に、農業体験施設、シェアハウス、
            <br />
            キャンプ場、再生可能エネルギー施設などへと転換。
            <br /><br />
            Discordでの週1イベント開催で、誰でも参加・貢献できるオープンなコミュニティを運営。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Link
            href="#"
            className="text-white text-sm tracking-wider border-b border-white pb-0.5 hover:opacity-70 transition-opacity duration-300"
          >
            PROFILE＋
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
