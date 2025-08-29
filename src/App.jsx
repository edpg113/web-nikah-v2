import "./App.css";
import Pria from "./assets/ading.jpg";
import Wanita from "./assets/iseh.jpg";
import Carousel from "./components/Carousel";
import Prewed1 from "./assets/prewed(4).jpg";
import Prewed2 from "./assets/prewed(7).jpg";
import Prewed3 from "./assets/prewed(8).jpg";
import Dana from "./assets/dana.png";
import Seabank from "./assets/seabank.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MusicPlayer from "./components/Musik";
import Backsound from "./audio/backsound pernikahan.m4a";
import { useRef, useState } from "react";

const foto = [Prewed1, Prewed2, Prewed3];

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 1600,
      offset: 100, // jarak scroll sebelum animasi aktif
      easing: "ease-in-out",
      once: true,
      startEvent: "wedding:open",
    });

    document.body.style.overflow = "hidden"; // Sembunyikan scroll saat di landing page
  }, []);

  const getQueryParam = (param) => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(param);
  };

  const namaTamu = getQueryParam("to") || "Tamu Undangan";

  const openInvitation = () => {
    const invitationSection = document.querySelector(".start");
    invitationSection.style.marginTop = "-100vh"; // Geser bagian undangan ke atas

    // scroll
    document.body.style.overflow = "auto"; // Sembunyikan scroll

    // setelah layout kebuka, trigger init AOS
    requestAnimationFrame(() => {
      document.dispatchEvent(new Event("wedding:open"));
      window.scrollTo(0, 0);
      window.dispatchEvent(new Event("scroll"));
    });

    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.error("Autoplay ditolak oleh browser:", err);
      });
      setIsPlaying(true); // Setel status pemutaran musik ke true
    }
  };

  return (
    <div className="App">
      {/* Landing */}
      <div className="start">
        <MusicPlayer
          src={Backsound}
          audioRef={audioRef}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
        <div className="bg-undangan">
          <div className="cover">
            <div className="container">
              <h3>The Wedding</h3>
              <div className="namaPengantin">
                <h1>Ading &amp; Iseh</h1>
                <div className="kepada">
                  <p>Sabtu, 07 September 2025</p>
                  <hr />
                  <p>Kepada Yth. Bapak/Ibu/Sdr/i</p>
                  <strong>{decodeURIComponent(namaTamu)}</strong>
                  <hr />
                </div>
              </div>
              <button onClick={openInvitation}>Buka Undangan</button>
            </div>
          </div>
        </div>
      </div>
      {/* Quotes */}
      <div className="quotes">
        <div className="bg-quotes">
          <div className="container2">
            <h1 data-aos="fade-up" data-aos-delay="400">
              Save Our Date
            </h1>
            <span data-aos="fade-up" data-aos-delay="600">
              07.09.2025
            </span>
            <h1
              className="namaPengantin2"
              data-aos="fade-up"
              data-aos-delay="1100"
            >
              Ading <span>&amp;</span> Iseh
            </h1>
            <p data-aos="fade-up" data-aos-delay="800">
              “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung
              dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa
              kasih dan sayang.”
              <br />
              (Q.S. Ar-Rum: 21)
            </p>
          </div>
        </div>
      </div>
      {/* Pengantin */}
      <div className="pengantin">
        <div className="bg-pengantin">
          <div className="container3" data-aos="fade-up">
            <h1 data-aos="fade-up" data-aos-delay="1300">
              Kedua Mempelai
            </h1>
            <div className="pengantin-container">
              <div
                className="pengantin-item"
                // data-aos="fade-up"
              >
                <div
                  className="bg-foto"
                  data-aos="fade-zoom-in"
                  data-aos-delay="800"
                >
                  <img className="foto" src={Wanita} alt="Wanita" />
                </div>
                <div
                  className="bg-foto"
                  data-aos="fade-zoom-in"
                  data-aos-duration="400"
                >
                  <img className="foto" src={Pria} alt="Pria" />
                </div>
                <h2 data-aos="fade-up" data-aos-delay="200">
                  Ading
                </h2>
                <h3 data-aos="fade-up" data-aos-delay="400">
                  Muhammad Hendriawan
                </h3>
                <p data-aos="fade-up" data-aos-delay="600">
                  Putra Bungsu dari Pasangan
                </p>
                <h3 data-aos="fade-up" data-aos-delay="700">
                  Putra dari Bapak Hapid dan Alm. Ibu Upi
                </h3>
              </div>
              <span>&</span>
              <div className="pengantin-item" data-aos="fade-up">
                <h2 data-aos="fade-up" data-aos-delay="200">
                  Iseh
                </h2>
                <h3 data-aos="fade-up" data-aos-delay="400">
                  Siti Aisah
                </h3>
                <p data-aos="fade-up" data-aos-delay="600">
                  Putri Bungsu dari Pasangan
                </p>
                <h3 data-aos="fade-up" data-aos-delay="700">
                  Putri dari Bapak Masum dan Ibu Idah
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Rangkaian Acara */}
      <div className="acara">
        <div className="bg-acara"></div>
        <div className="container4">
          <h1 data-aos="fade-up" data-aos-delay="100">
            Ading & Iseh <br />
            Wedding
          </h1>
          <div className="acara-item" data-aos="fade-up" data-aos-delay="300">
            <h2>Akad Nikah</h2>
            <p>Sabtu, 07 September 2025</p>
            <p>Pukul 09.00 WIB</p>
          </div>
          <div className="acara-item" data-aos="fade-up" data-aos-delay="330">
            <h2>Resepsi</h2>
            <p>Sabtu, 07 September 2025</p>
            <p>Pukul 12.00 WIB</p>
          </div>
          <div className="acara-item" data-aos="fade-up" data-aos-delay="300">
            <h2>Lokasi</h2>
            <p>Rumah Mempelai Wanita</p>
            <p>Kp. Bojong Keji, Rt 03/03, Bogor</p>
          </div>
          <button>
            <a href="https://maps.app.goo.gl/zb8kEWdsd9iscKkp6" target="_blank">
              Buka Lokasi
            </a>
          </button>
        </div>
        {/* </div> */}
      </div>
      {/* <!-- CERITA CINTA --> */}
      <div className="progress" id="cerita">
        {/* <!-- JUDUL --> */}
        <div className="container-cerita">
          <div className="judul-undangan">
            <h1 data-aos="fade-up" data-aos-delay="200">
              Cerita Cinta
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Banyak cerita yang kami lalui sehingga akhirnya kami bisa bersatu,
              cerita yang akan kami kenang selalu, dan cerita itu kami bagi
              untuk anda.
            </p>
          </div>

          <section className="timeline">
            <ul>
              <li>
                <div>
                  <p data-aos="fade-zoom-in" data-aos-delay="200">
                    Pertama kali jumpa
                  </p>
                  <span data-aos="fade-zoom-in" data-aos-delay="300">
                    <time>Diawal tahun 2020</time> saat itu pertamakali bertemu
                    dijalan dan dipertemukan kembali di sebuah komunitas Sadulur
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <p data-aos="fade-zoom-in" data-aos-delay="200">
                    Mulai dekat
                  </p>
                  <span data-aos="fade-zoom-in" data-aos-delay="300">
                    <time>Bulan Juli 2020</time> Disaat komunikasi buat acara
                    kecurug Cisadane, disinilah kami mulai sering berbagi cerita
                    satu sama lain dan kami mulai menjalin hubungan, ditahun
                    2021 sampai ditahun 2023 kami sempat berpisah dan kami
                    bersatu kembali dan memutuskan untuk kejenjang yg lebih
                    serius
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <p data-aos="fade-zoom-in" data-aos-delay="200">
                    Komitmen bersama
                  </p>
                  <span data-aos="fade-zoom-in" data-aos-delay="300">
                    <time>Bulan Mei 2024</time> Kami memutuskan untuk tunangan,
                    pertemuan kedua belah fihak keluarga
                  </span>
                </div>
              </li>
              <li>
                <div data-aos="fade-zoom-in" data-aos-delay="200">
                  <p>Lamaran</p>
                  <span data-aos="fade-zoom-in" data-aos-delay="300">
                    <time>08 Juni 2025</time> Menjadi momen bersejarah kami
                    sepakat untuk mempertemukan kembali dua belah fihak keluarga
                    untuk meminta doa restu dan menentukan pernikahan
                  </span>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
      {/* Galery */}
      <div className="galery">
        <div className="bg-galery">
          <div className="container5">
            <h1 data-aos="fade-up" data-aos-delay="200">
              Galeri
            </h1>
            <p data-aos="fade-up" data-aos-delay="400">
              "Cinta bukan tentang menemukan seseorang untuk hidup bersama, tapi
              tentang menemukan seseorang yang tak bisa kamu hidup tanpanya."
            </p>
            <div data-aos="zoom-in" data-aos-delay="600">
              <Carousel images={foto} autoPlayInterval={4000} />
            </div>
          </div>
        </div>
      </div>
      {/* Wedding Gift */}
      <div className="gift">
        <div className="bg-gift">
          <div className="container6">
            <h1 data-aos="fade-up" data-aos-delay="200">
              Wedding Gift
            </h1>
            <p data-aos="fade-up" data-aos-delay="400">
              "Hadiah terbaik adalah kehadiranmu di hari bahagia kami. Namun
              jika ingin memberikan hadiah, kami menerima dengan senang hati."
            </p>
            <div className="icon-bank" data-aos="fade-up" data-aos-delay="600">
              <img src={Dana} alt="Dana" />
              <div className="rekening">
                <h3>Siti Aisah</h3>
                <h3>085776089473</h3>
              </div>
            </div>
            <div className="icon-bank" data-aos="fade-up" data-aos-delay="800">
              <img src={Seabank} alt="Seabank" />
              <div className="rekening">
                <h3>Siti Aisah</h3>
                <h3>901943019899</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* penutup */}
      <div className="penutup">
        <div className="bg-penutup">
          <div className="container7">
            <h1 data-aos="fade-up" data-aos-delay="200">
              Terima Kasih
            </h1>
            <p data-aos="fade-up" data-aos-delay="400">
              Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila
              Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu
              kepada kami.
            </p>
            <p data-aos="fade-up" data-aos-delay="600">
              Atas kehadiran dan doa restunya kami ucapkan terima kasih.
            </p>
            <p data-aos="fade-up" data-aos-delay="800">
              Kami yang berbahagia
            </p>
            <h2 data-aos="fade-up" data-aos-delay="1000">
              Ading & Iseh
            </h2>
            <div className="watermark">
              <a href="https://www.instagram.com/apiww.izz/">
                Undangan Digital by Rafi Mauludi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
