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
            Community-driven Asset Valorization Platform.
            <br /><br />
            We work in idle asset utilization and value creation, based in Japan, with blockchain technology at the core.
            <br /><br />
            We pursuing create experiences that ignite impact and transformation,
            <br />
            like a blue flame in the economy.
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
            コミュニティ主導型資産価値化プラットフォーム「Million Member DAO」です。
            <br /><br />
            日本を拠点にブロックチェーン技術を軸とした遊休資産活用と価値創造を行っています。
            <br /><br />
            経済に青い炎のような衝撃や変革が湧き上がる体験を追求しています。
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
