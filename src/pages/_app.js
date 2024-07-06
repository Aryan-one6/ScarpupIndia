import { SearchContextProvider } from "@/context/search";
import Footer from "@/components/footer";
import "@/styles/globals.css";
import Layout from "@/utils/layout";
import { motion, AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait">
      <SearchContextProvider>
        <Layout title={"Waste 2 Wealth"}>
          <motion.div>
            <Component {...pageProps} />
            <motion.div
              className="slide-in"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{ duration: 5, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>
            <motion.div
              className="slide-out"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 5, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>
          </motion.div>
        </Layout>
      </SearchContextProvider>
    </AnimatePresence>
  );
}
