import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Loader2 } from 'lucide-react'
import { useRef, useState } from 'react'
import type { FormEvent } from "react"
import { toast } from 'sonner'

function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [loading, setLoading] = useState(false)

 async function handleSubmit(e: FormEvent) {
  e.preventDefault()

  if (!formRef.current) return

  setLoading(true)

  const formData = new FormData(formRef.current)

  const key = import.meta.env.VITE_WEB3FORMS_KEY
  console.log("KEY:", key)

  formData.append("access_key", key)

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await res.json()
    console.log("RESPONSE:", data)

    if (data.success) {
      toast.success("Mensagem enviada com sucesso")
      formRef.current.reset()
    } else {
      toast.error(data.message || "Erro ao enviar mensagem")
    }
  } catch (err) {
    toast.error("Erro de conexão")
  } finally {
    setLoading(false)
  }
}
  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden bg-transparent"
    >
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#d6a1b1] tracking-[0.3em] text-sm">
            CONTATO
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-[#F6E7EB] mt-6">
            Vamos criar algo
            <span className="block bg-linear-to-r from-[#f7c8d6] via-[#d6a1b1] to-[#bd5a78] text-transparent bg-clip-text">
              incrível juntos
            </span>
          </h2>

          <p className="text-[#d8c0c8] mt-6 max-w-2xl mx-auto leading-relaxed text-lg">
            Estou disponível para novos projetos, freelas e oportunidades.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#2A1B21]/80 border border-[#d6a1b1]/10 backdrop-blur-xl rounded-4xl p-8 space-y-8">
              <div className="flex items-center gap-5">
                <Mail className="text-[#d6a1b1]" />
                <div>
                  <p className="text-[#F6E7EB] font-semibold">Email</p>
                  <p className="text-[#d8c0c8]">
                    andressa.evellyn.andrade@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <MapPin className="text-[#d6a1b1]" />
                <div>
                  <p className="text-[#F6E7EB] font-semibold">Localização</p>
                  <p className="text-[#d8c0c8]">
                    Guarulhos, São Paulo
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-[#2A1B21]/80 border border-[#d6a1b1]/10 backdrop-blur-xl rounded-4xl p-8 space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              required
              className="w-full bg-white/5 border border-[#d6a1b1]/10 rounded-2xl px-6 py-4 text-[#F6E7EB]"
            />

            <input
              type="email"
              name="email"
              placeholder="Seu email"
              required
              className="w-full bg-white/5 border border-[#d6a1b1]/10 rounded-2xl px-6 py-4 text-[#F6E7EB]"
            />

            <textarea
              name="message"
              placeholder="Sua mensagem"
              rows={6}
              required
              className="w-full bg-white/5 border border-[#d6a1b1]/10 rounded-2xl px-6 py-4 text-[#F6E7EB] resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl  border-[#d6a1b1]/20
                    bg-[#d6a1b1]/80
                      backdrop-blur-md
                    hover:bg-[#bd5a78]/25 disabled:opacity-60 transition text-[#F6E7EB] font-semibold flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Enviar mensagem
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact