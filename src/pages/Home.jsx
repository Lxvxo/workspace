import React from "react";
import "../styles/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const App = () => {
  return (
    <div id="webcrumbs">
      <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 p-8 font-sans">
        <Header></Header>
        <section className="max-w-7xl mx-auto space-y-6">
          {/* Hero Section */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg shadow-indigo-100/30 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
                  Explorez l'Avenir de l'Intelligence Artificielle
                </h1>
                <p className="text-gray-600 mb-6 text-lg">
                  Découvrez les dernières avancées en IA, participez à des défis
                  stimulants et rejoignez une communauté passionnée de
                  chercheurs, développeurs et enthousiastes.
                </p>
                <div className="flex gap-4 mb-6">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center group">
                    <span className="material-symbols-outlined mr-2 group-hover:animate-bounce">
                      rocket_launch
                    </span>
                    Commencer l'aventure
                  </button>
                  <button className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 flex items-center group">
                    <span className="material-symbols-outlined mr-2 group-hover:animate-pulse">
                      play_circle
                    </span>
                    Voir la démo
                  </button>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="flex items-center mr-4 hover:text-green-600 transition-all duration-300 group">
                    <span className="material-symbols-outlined text-green-500 mr-1 group-hover:animate-bounce">
                      verified
                    </span>
                    Accessible à tous niveaux
                  </span>
                  <span className="flex items-center mr-4 hover:text-blue-600 transition-all duration-300 group">
                    <span className="material-symbols-outlined text-blue-500 mr-1 group-hover:animate-pulse">
                      groups
                    </span>
                    <span
                      className="group-hover:animate-count-up"
                      data-count="25000"
                    >
                      +25K
                    </span>{" "}
                    utilisateurs
                  </span>
                  <span className="flex items-center hover:text-purple-600 transition-all duration-300 group">
                    <span className="material-symbols-outlined text-purple-500 mr-1 group-hover:animate-spin">
                      science
                    </span>
                    Basé sur la recherche
                  </span>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="w-full h-80 bg-gradient-to-br from-blue-300/20 via-purple-300/20 to-indigo-300/20 rounded-2xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 via-purple-500/80 to-indigo-500/80 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 animate-pulse relative overflow-hidden">
                        <div className="absolute inset-1 rounded-full bg-white/10 backdrop-blur-sm"></div>
                        <div className="absolute inset-0 flex items-center justify-center animate-float">
                          <span className="material-symbols-outlined text-white text-5xl animate-pulse">
                            neurology
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-4 -top-4 w-16 h-16 bg-yellow-300/20 rounded-full blur-xl animate-pulse-slow"></div>
                  <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-blue-300/30 rounded-full blur-xl animate-pulse-slow"></div>
                  <div className="absolute right-1/4 bottom-1/4 w-20 h-20 bg-purple-300/30 rounded-full blur-xl animate-pulse-slow"></div>

                  {/* Neural network animation */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="neuron neuron-1"></div>
                    <div className="neuron neuron-2"></div>
                    <div className="neuron neuron-3"></div>
                    <div className="neuron neuron-4"></div>
                    <div className="neuron neuron-5"></div>
                    <div className="neuron neuron-6"></div>
                    <div className="synaptic-connection connection-1"></div>
                    <div className="synaptic-connection connection-2"></div>
                    <div className="synaptic-connection connection-3"></div>
                    <div className="synaptic-connection connection-4"></div>
                    <div className="synaptic-connection connection-5"></div>
                    <div className="pulse-signal signal-1"></div>
                    <div className="pulse-signal signal-2"></div>
                    <div className="pulse-signal signal-3"></div>
                  </div>
                </div>
                <div className="absolute -bottom-6 right-10 bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-4 transform hover:scale-105 hover:rotate-1 transition-all duration-300 animate-float">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-purple-600 animate-pulse">
                      trending_up
                    </span>
                    <div>
                      <p className="text-sm font-medium">IA Générative</p>
                      <p className="text-xs text-gray-500">
                        +245% de croissance
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 left-10 bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-4 transform hover:scale-105 hover:rotate-1 transition-all duration-300 animate-float-reverse">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue-600 animate-pulse">
                      smart_toy
                    </span>
                    <div>
                      <p className="text-sm font-medium">AGI Research</p>
                      <p className="text-xs text-gray-500">Frontier avancée</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div
              className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="material-symbols-outlined text-4xl bg-blue-100 text-blue-600 p-3 rounded-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:rotate-12">
                school
              </span>
              <h3 className="text-xl font-bold mb-2">
                Parcours d'Apprentissage
              </h3>
              <p className="text-gray-600 mb-4">
                Suivez des parcours structurés adaptés à votre niveau, de
                débutant à expert en IA.
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium flex items-center group-hover:underline"
              >
                Explorer les parcours
                <span className="material-symbols-outlined ml-1 transform group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>

            <div
              className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <span className="material-symbols-outlined text-4xl bg-purple-100 text-purple-600 p-3 rounded-xl mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 group-hover:rotate-12">
                extension
              </span>
              <h3 className="text-xl font-bold mb-2">Projets Collaboratifs</h3>
              <p className="text-gray-600 mb-4">
                Rejoignez des projets d'IA open source et collaborez avec des
                passionnés du monde entier.
              </p>
              <a
                href="#"
                className="text-purple-600 font-medium flex items-center group-hover:underline"
              >
                Voir les projets
                <span className="material-symbols-outlined ml-1 transform group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>

            <div
              className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="material-symbols-outlined text-4xl bg-indigo-100 text-indigo-600 p-3 rounded-xl mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 group-hover:rotate-12">
                forum
              </span>
              <h3 className="text-xl font-bold mb-2">Communauté Active</h3>
              <p className="text-gray-600 mb-4">
                Échangez avec des experts, posez vos questions et partagez vos
                connaissances.
              </p>
              <a
                href="#"
                className="text-indigo-600 font-medium flex items-center group-hover:underline"
              >
                Rejoindre la communauté
                <span className="material-symbols-outlined ml-1 transform group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* News Section */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800 relative group">
                Actualités IA en Temps Réel
                <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </h2>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 flex items-center shadow-md hover:shadow-lg transform hover:scale-105">
                  <span className="material-symbols-outlined mr-1 text-sm">
                    filter_list
                  </span>
                  Filtrer
                </button>
                <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-all duration-300 flex items-center shadow-md hover:shadow-lg transform hover:scale-105">
                  <span className="material-symbols-outlined mr-1 text-sm">
                    tune
                  </span>
                  Préférences
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-purple-300 to-indigo-300 rounded-full z-10"></div>

              <div className="overflow-hidden pb-4 relative z-20">
                <div className="flex space-x-8 animate-marquee hover:pause">
                  <div
                    className="bg-gradient-to-br from-white/90 to-blue-50/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 transform hover:-translate-y-2 hover:scale-105 group relative min-w-[320px] md:min-w-[380px] animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-4 border-white shadow-lg z-20 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
                    <div className="absolute right-5 top-3 text-xs text-blue-500 opacity-70">
                      <span className="material-symbols-outlined animate-pulse text-lg">
                        autorenew
                      </span>
                    </div>
                    <span className="bg-gradient-to-r from-blue-200 to-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full inline-block mb-3 shadow-sm">
                      Intelligence Artificielle
                    </span>
                    <h3 className="font-extrabold text-xl mb-3 group-hover:text-blue-700 transition-colors tracking-tight">
                      DeepMind Révolutionne la Prédiction des Structures
                      Protéiques
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      Une avancée majeure dans la compréhension du repliement
                      des protéines pourrait accélérer considérablement la
                      découverte de médicaments et révolutionner la biologie
                      structurelle.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 flex items-center bg-gray-100/80 px-2 py-1 rounded-full">
                        <span className="material-symbols-outlined text-sm mr-1">
                          calendar_today
                        </span>
                        12 Juin 2023
                      </span>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center group-hover:font-bold relative overflow-hidden">
                        <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                          Lire plus
                        </span>
                        <span className="material-symbols-outlined text-sm ml-1 transform group-hover:translate-x-2 transition-transform duration-300">
                          arrow_forward
                        </span>
                        <span className="absolute h-0.5 w-0 bg-blue-600 bottom-0 left-0 group-hover:w-full transition-all duration-300"></span>
                      </button>
                    </div>
                  </div>

                  <div
                    className="bg-gradient-to-br from-white/90 to-purple-50/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 transform hover:-translate-y-2 hover:scale-105 group relative min-w-[320px] md:min-w-[380px] animate-fade-in"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 border-4 border-white shadow-lg z-20 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
                    <div className="absolute right-5 top-3 text-xs text-purple-500 opacity-70">
                      <span className="material-symbols-outlined animate-pulse text-lg">
                        autorenew
                      </span>
                    </div>
                    <span className="bg-gradient-to-r from-purple-200 to-purple-100 text-purple-800 text-xs font-semibold px-3 py-1.5 rounded-full inline-block mb-3 shadow-sm">
                      Machine Learning
                    </span>
                    <h3 className="font-extrabold text-xl mb-3 group-hover:text-purple-700 transition-colors tracking-tight">
                      GPT-5 : Des Capacités de Raisonnement Proches de l'Humain
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      Le nouveau modèle d'OpenAI montre des capacités de
                      raisonnement complexe jusqu'alors inégalées, soulevant des
                      questions sur la frontière entre intelligence artificielle
                      et humaine.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 flex items-center bg-gray-100/80 px-2 py-1 rounded-full">
                        <span className="material-symbols-outlined text-sm mr-1">
                          calendar_today
                        </span>
                        28 Mai 2023
                      </span>
                      <button className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center group-hover:font-bold relative overflow-hidden">
                        <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                          Lire plus
                        </span>
                        <span className="material-symbols-outlined text-sm ml-1 transform group-hover:translate-x-2 transition-transform duration-300">
                          arrow_forward
                        </span>
                        <span className="absolute h-0.5 w-0 bg-purple-600 bottom-0 left-0 group-hover:w-full transition-all duration-300"></span>
                      </button>
                    </div>
                  </div>

                  <div
                    className="bg-gradient-to-br from-white/90 to-indigo-50/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 transform hover:-translate-y-2 hover:scale-105 group relative min-w-[320px] md:min-w-[380px] animate-fade-in"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 border-4 border-white shadow-lg z-20 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
                    <div className="absolute right-5 top-3 text-xs text-indigo-500 opacity-70">
                      <span className="material-symbols-outlined animate-pulse text-lg">
                        autorenew
                      </span>
                    </div>
                    <span className="bg-gradient-to-r from-indigo-200 to-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1.5 rounded-full inline-block mb-3 shadow-sm">
                      IA Générative
                    </span>
                    <h3 className="font-extrabold text-xl mb-3 group-hover:text-indigo-700 transition-colors tracking-tight">
                      Une Nouvelle Ère pour la Création Artistique
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      L'essor des modèles génératifs transforme radicalement les
                      arts visuels, la musique et l'écriture, redéfinissant les
                      frontières entre créativité humaine et artificielle.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 flex items-center bg-gray-100/80 px-2 py-1 rounded-full">
                        <span className="material-symbols-outlined text-sm mr-1">
                          calendar_today
                        </span>
                        15 Mai 2023
                      </span>
                      <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center group-hover:font-bold relative overflow-hidden">
                        <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                          Lire plus
                        </span>
                        <span className="material-symbols-outlined text-sm ml-1 transform group-hover:translate-x-2 transition-transform duration-300">
                          arrow_forward
                        </span>
                        <span className="absolute h-0.5 w-0 bg-indigo-600 bottom-0 left-0 group-hover:w-full transition-all duration-300"></span>
                      </button>
                    </div>
                  </div>

                  <div
                    className="bg-gradient-to-br from-white/90 to-blue-50/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 transform hover:-translate-y-2 hover:scale-105 group relative min-w-[320px] md:min-w-[380px] animate-fade-in"
                    style={{ animationDelay: "0.8s" }}
                  >
                    <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-4 border-white shadow-lg z-20 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
                    <div className="absolute right-5 top-3 text-xs text-blue-500 opacity-70">
                      <span className="material-symbols-outlined animate-pulse text-lg">
                        autorenew
                      </span>
                    </div>
                    <span className="bg-gradient-to-r from-blue-200 to-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full inline-block mb-3 shadow-sm">
                      IA Médicale
                    </span>
                    <h3 className="font-extrabold text-xl mb-3 group-hover:text-blue-700 transition-colors tracking-tight">
                      L'IA Dépasse les Experts dans le Diagnostic Précoce
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      Une étude internationale démontre que les algorithmes
                      d'apprentissage profond surpassent désormais les médecins
                      spécialistes dans l'identification précoce de certaines
                      pathologies.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 flex items-center bg-gray-100/80 px-2 py-1 rounded-full">
                        <span className="material-symbols-outlined text-sm mr-1">
                          calendar_today
                        </span>
                        5 Mai 2023
                      </span>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center group-hover:font-bold relative overflow-hidden">
                        <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                          Lire plus
                        </span>
                        <span className="material-symbols-outlined text-sm ml-1 transform group-hover:translate-x-2 transition-transform duration-300">
                          arrow_forward
                        </span>
                        <span className="absolute h-0.5 w-0 bg-blue-600 bottom-0 left-0 group-hover:w-full transition-all duration-300"></span>
                      </button>
                    </div>
                  </div>

                  <div
                    className="bg-gradient-to-br from-white/90 to-purple-50/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 transform hover:-translate-y-2 hover:scale-105 group relative min-w-[320px] md:min-w-[380px] animate-fade-in"
                    style={{ animationDelay: "1.0s" }}
                  >
                    <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 border-4 border-white shadow-lg z-20 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
                    <div className="absolute right-5 top-3 text-xs text-purple-500 opacity-70">
                      <span className="material-symbols-outlined animate-pulse text-lg">
                        autorenew
                      </span>
                    </div>
                    <span className="bg-gradient-to-r from-purple-200 to-purple-100 text-purple-800 text-xs font-semibold px-3 py-1.5 rounded-full inline-block mb-3 shadow-sm">
                      Robotique Avancée
                    </span>
                    <h3 className="font-extrabold text-xl mb-3 group-hover:text-purple-700 transition-colors tracking-tight">
                      Des robots humanoïdes intègrent l'apprentissage continu
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      Une nouvelle génération de robots humanoïdes peut
                      désormais apprendre de ses expériences et adapter son
                      comportement en temps réel grâce à une architecture IA
                      révolutionnaire.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 flex items-center bg-gray-100/80 px-2 py-1 rounded-full">
                        <span className="material-symbols-outlined text-sm mr-1">
                          calendar_today
                        </span>
                        2 Mai 2023
                      </span>
                      <button className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center group-hover:font-bold relative overflow-hidden">
                        <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                          Lire plus
                        </span>
                        <span className="material-symbols-outlined text-sm ml-1 transform group-hover:translate-x-2 transition-transform duration-300">
                          arrow_forward
                        </span>
                        <span className="absolute h-0.5 w-0 bg-purple-600 bottom-0 left-0 group-hover:w-full transition-all duration-300"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <style jsx>{`
              @keyframes marquee {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-180%);
                }
              }
              .animate-marquee {
                animation: marquee 30s linear infinite;
              }
              .hover\:pause:hover {
                animation-play-state: paused;
              }
            `}</style>
          </div>
        </section>
        <main className="max-w-7xl mx-auto">
          <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-indigo-100/30 relative overflow-hidden mb-10 border border-white/40">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-300/20 to-transparent rounded-bl-full -z-10"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-300/20 to-transparent rounded-tr-full -z-10"></div>
            <div className="absolute -left-20 top-1/4 w-40 h-40 bg-blue-200/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -right-10 bottom-1/3 w-60 h-60 bg-purple-200/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] -z-10"></div>

            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              AI Lab
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-100 group overflow-hidden relative hover:translate-y-[-4px] transition-all">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/5 rounded-bl-full transform rotate-45 transition-transform duration-500 group-hover:rotate-90"></div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-700 flex items-center">
                  <span className="material-symbols-outlined mr-2 bg-blue-100 p-2 rounded-lg text-blue-600 group-hover:bg-blue-200 transition-all duration-300">
                    view_cozy
                  </span>
                  Adaptive Canvas
                </h3>
                <p className="text-gray-700 mb-4 relative z-10">
                  Interface intuitive de type drag-and-drop pour créer des
                  modèles IA sans code. Parfait pour explorer des concepts IA
                  sans barrières techniques.
                </p>
                <ul className="space-y-2 mb-5 relative z-10">
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-blue-500 mr-2 mt-0.5">
                      add_circle
                    </span>
                    <span>
                      Ajoutez facilement des couches (Dense, Conv2D) et des
                      optimiseurs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-blue-500 mr-2 mt-0.5">
                      auto_fix
                    </span>
                    <span>
                      NeuralSpirit suggère des ajustements intelligents
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-blue-500 mr-2 mt-0.5">
                      bolt
                    </span>
                    <span>
                      Définissez des évolutions conditionnelles pour votre
                      modèle
                    </span>
                  </li>
                </ul>
                <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-white/70 to-blue-50/70 p-4 border border-blue-100 group-hover:border-blue-200 transition-colors">
                  <div className="absolute inset-0 bg-grid-pattern-blue opacity-10"></div>
                  <div className="flex space-x-2 mb-2">
                    <div className="h-6 w-20 bg-blue-200 rounded group-hover:bg-blue-300 transition-colors duration-300 flex items-center justify-center text-xs text-blue-700 font-medium">
                      Dense
                    </div>
                    <div className="h-6 w-24 bg-indigo-200 rounded group-hover:bg-indigo-300 transition-colors duration-300 flex items-center justify-center text-xs text-indigo-700 font-medium">
                      Conv2D
                    </div>
                    <div className="h-6 w-20 bg-purple-200 rounded group-hover:bg-purple-300 transition-colors duration-300 flex items-center justify-center text-xs text-purple-700 font-medium">
                      Dropout
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="h-6 w-full bg-gradient-to-r from-blue-100 to-blue-200 rounded relative overflow-hidden flex items-center">
                      <div className="absolute left-0 top-0 h-full w-3/4 bg-blue-300/30"></div>
                      <span className="text-xs font-medium ml-2 text-blue-800 relative z-10">
                        Model Structure
                      </span>
                    </div>
                    <div className="h-6 w-full bg-gradient-to-r from-purple-100 to-purple-200 rounded relative overflow-hidden flex items-center">
                      <div className="absolute left-0 top-0 h-full w-1/2 bg-purple-300/30"></div>
                      <span className="text-xs font-medium ml-2 text-purple-800 relative z-10">
                        Optimization
                      </span>
                    </div>
                  </div>
                </div>
                <button className="mt-5 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors duration-300 flex items-center group">
                  <span>Explorer le Canvas</span>
                  <span className="material-symbols-outlined ml-1 transform group-hover:translate-x-1 transition-transform duration-300">
                    arrow_forward
                  </span>
                </button>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-purple-100 group overflow-hidden relative hover:translate-y-[-4px] transition-all">
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400/5 rounded-bl-full transform rotate-45 transition-transform duration-500 group-hover:rotate-90"></div>
                <h3 className="text-2xl font-semibold mb-3 text-purple-700 flex items-center">
                  <span className="material-symbols-outlined mr-2 bg-purple-100 p-2 rounded-lg text-purple-600 group-hover:bg-purple-200 transition-all duration-300">
                    code
                  </span>
                  Codage Optionnel
                </h3>
                <p className="text-gray-700 mb-4 relative z-10">
                  Éditeur avancé pour les utilisateurs souhaitant personnaliser
                  leurs modèles avec du code. Passez facilement du mode visuel
                  au mode code.
                </p>
                <ul className="space-y-2 mb-5 relative z-10">
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-purple-500 mr-2 mt-0.5">
                      edit
                    </span>
                    <span>
                      Éditeur Ace avec mise en évidence de syntaxe pour Python
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-purple-500 mr-2 mt-0.5">
                      sync
                    </span>
                    <span>
                      Synchronisation bidirectionnelle entre canvas et code
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-purple-500 mr-2 mt-0.5">
                      build
                    </span>
                    <span>
                      Outils avancés pour les développeurs expérimentés
                    </span>
                  </li>
                </ul>
                <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-white/70 to-purple-50/70 p-4 border border-purple-100 group-hover:border-purple-200 transition-colors">
                  <div className="absolute inset-0 bg-grid-pattern-purple opacity-10"></div>
                  <div className="font-mono text-sm text-gray-700 overflow-hidden">
                    <div className="flex items-center">
                      <span className="text-purple-600">import</span>
                      <span className="ml-1">tensorflow</span>
                      <span className="ml-1 text-purple-600">as</span>
                      <span className="ml-1">tf</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="text-blue-600">model</span>
                      <span className="ml-1">=</span>
                      <span className="ml-1">tf.keras.Sequential([</span>
                    </div>
                    <div className="flex items-center mt-1 ml-4">
                      <span className="text-blue-600">
                        tf.keras.layers.Dense
                      </span>
                      <span>(128,</span>
                      <span className="text-purple-600">activation</span>
                      <span>=</span>
                      <span className="text-green-600">'relu'</span>
                      <span>),</span>
                    </div>
                    <div className="flex items-center mt-1 ml-4">
                      <span className="text-blue-600">
                        tf.keras.layers.Dropout
                      </span>
                      <span>(0.2),</span>
                    </div>
                    <div className="mt-1">])</div>
                  </div>
                </div>
                <button className="mt-5 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg transition-colors duration-300 flex items-center group">
                  <span>Ouvrir l'Éditeur</span>
                  <span className="material-symbols-outlined ml-1 transform group-hover:translate-x-1 transition-transform duration-300">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-indigo-100 group overflow-hidden relative hover:translate-y-[-4px] transition-all">
                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-400/5 rounded-bl-full transform rotate-45 transition-transform duration-500 group-hover:rotate-90"></div>
                <h3 className="text-2xl font-semibold mb-3 text-indigo-700 flex items-center">
                  <span className="material-symbols-outlined mr-2 bg-indigo-100 p-2 rounded-lg text-indigo-600 group-hover:bg-indigo-200 transition-all duration-300">
                    dataset
                  </span>
                  Datasets & Simulation
                </h3>
                <p className="text-gray-700 mb-4 relative z-10">
                  Importez vos propres données ou utilisez nos ensembles
                  pré-chargés. Visualisez les performances de votre modèle en
                  temps réel.
                </p>
                <div className="grid grid-cols-2 gap-5 mb-5 relative z-10">
                  <div className="space-y-2">
                    <h4 className="font-medium text-indigo-700">Datasets</h4>
                    <ul className="space-y-1.5">
                      <li className="flex items-start text-sm">
                        <span className="material-symbols-outlined text-indigo-500 mr-1 text-sm mt-0.5">
                          check_circle
                        </span>
                        <span>Upload personnel (CSV, images)</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="material-symbols-outlined text-indigo-500 mr-1 text-sm mt-0.5">
                          check_circle
                        </span>
                        <span>Collections pré-chargées</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="material-symbols-outlined text-indigo-500 mr-1 text-sm mt-0.5">
                          check_circle
                        </span>
                        <span>Preprocessing sans code</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-indigo-700">Simulation</h4>
                    <ul className="space-y-1.5">
                      <li className="flex items-start text-sm">
                        <span className="material-symbols-outlined text-indigo-500 mr-1 text-sm mt-0.5">
                          check_circle
                        </span>
                        <span>Tracking de Loss/Accuracy</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="material-symbols-outlined text-indigo-500 mr-1 text-sm mt-0.5">
                          check_circle
                        </span>
                        <span>Visualisation de gradients</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="material-symbols-outlined text-indigo-500 mr-1 text-sm mt-0.5">
                          check_circle
                        </span>
                        <span>Exécution via TensorFlow.js</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg bg-white/70 p-4 border border-indigo-100 group-hover:border-indigo-200 transition-colors">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-2">
                      <div className="h-6 bg-indigo-100 rounded-md flex items-center px-2 text-xs text-indigo-700 hover:bg-indigo-200 transition-colors">
                        <span className="material-symbols-outlined text-indigo-500 mr-1 text-sm">
                          folder
                        </span>
                        MNIST
                      </div>
                      <div className="h-6 bg-indigo-100 rounded-md flex items-center px-2 text-xs text-indigo-700 hover:bg-indigo-200 transition-colors">
                        <span className="material-symbols-outlined text-indigo-500 mr-1 text-sm">
                          folder
                        </span>
                        CIFAR-10
                      </div>
                      <div className="h-6 bg-indigo-100 rounded-md flex items-center px-2 text-xs text-indigo-700 hover:bg-indigo-200 transition-colors">
                        <span className="material-symbols-outlined text-indigo-500 mr-1 text-sm">
                          folder
                        </span>
                        Fashion MNIST
                      </div>
                    </div>
                    <div className="relative h-28 rounded-lg bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center opacity-60">
                        <div className="w-16 h-16 border-t-4 border-indigo-500 border-solid rounded-full animate-spin"></div>
                      </div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-sm font-medium text-indigo-700">
                          Simulation
                        </div>
                        <div className="text-xs text-indigo-600">
                          Epoch: 5/10
                        </div>
                        <div className="mt-2 text-xs">
                          <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded mr-1">
                            Loss: 0.12
                          </span>
                          <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">
                            Acc: 95%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex space-x-3">
                  <button className="px-3 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-lg transition-colors duration-300 flex items-center text-sm group flex-1 justify-center">
                    <span className="material-symbols-outlined mr-1 text-sm">
                      upload_file
                    </span>
                    <span>Importer des données</span>
                  </button>
                  <button className="px-3 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-lg transition-colors duration-300 flex items-center text-sm group flex-1 justify-center">
                    <span className="material-symbols-outlined mr-1 text-sm">
                      play_arrow
                    </span>
                    <span>Lancer simulation</span>
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-100 group overflow-hidden relative hover:translate-y-[-4px] transition-all">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/5 rounded-bl-full transform rotate-45 transition-transform duration-500 group-hover:rotate-90"></div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-700 flex items-center">
                  <span className="material-symbols-outlined mr-2 bg-blue-100 p-2 rounded-lg text-blue-600 group-hover:bg-blue-200 transition-all duration-300">
                    groups
                  </span>
                  Collaborative Forge
                </h3>
                <p className="text-gray-700 mb-4 relative z-10">
                  Collaborez en temps réel avec d'autres utilisateurs sur vos
                  modèles IA. Partagez des idées, résolvez des problèmes
                  ensemble et innovez collectivement.
                </p>
                <div className="flex flex-col mb-5 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-blue-700">
                        Caractéristiques
                      </h4>
                      <ul className="space-y-1.5">
                        <li className="flex items-start text-sm">
                          <span className="material-symbols-outlined text-blue-500 mr-1 text-sm mt-0.5">
                            group_work
                          </span>
                          <span>Édition collaborative en temps réel</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <span className="material-symbols-outlined text-blue-500 mr-1 text-sm mt-0.5">
                            chat
                          </span>
                          <span>Chat intégré pour discussions</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <span className="material-symbols-outlined text-blue-500 mr-1 text-sm mt-0.5">
                            share
                          </span>
                          <span>Partage de visualisations et résultats</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-blue-700">Projets</h4>
                      <ul className="space-y-1.5">
                        <li className="flex items-start text-sm">
                          <span className="material-symbols-outlined text-blue-500 mr-1 text-sm mt-0.5">
                            science
                          </span>
                          <span>Créez des projets thématiques</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <span className="material-symbols-outlined text-blue-500 mr-1 text-sm mt-0.5">
                            save
                          </span>
                          <span>Sauvegardez et reprenez plus tard</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <span className="material-symbols-outlined text-blue-500 mr-1 text-sm mt-0.5">
                            publish
                          </span>
                          <span>Publiez vos modèles dans la communauté</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg bg-white/70 p-4 border border-blue-100 group-hover:border-blue-200 transition-colors">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-3">
                      <div className="flex -space-x-2">
                        <div className="w-7 h-7 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs shadow-sm">
                          AS
                        </div>
                        <div className="w-7 h-7 rounded-full bg-purple-400 flex items-center justify-center text-white text-xs shadow-sm">
                          JK
                        </div>
                        <div className="w-7 h-7 rounded-full bg-green-400 flex items-center justify-center text-white text-xs shadow-sm">
                          MT
                        </div>
                      </div>
                      <div className="ml-3 text-xs text-gray-600">
                        3 collaborateurs en ligne
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-7xl mx-auto rounded-2xl bg-white/70 backdrop-blur-md p-6 shadow-lg shadow-indigo-100/30">
            <div className="flex items-center mb-8">
              <span className="material-symbols-outlined text-4xl text-indigo-600 mr-4 transform hover:rotate-12 transition-transform duration-300">
                groups
              </span>
              <h2 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tight">
                Community Hub
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="col-span-2">
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.01]">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-extrabold text-indigo-800 flex items-center">
                      <span className="material-symbols-outlined mr-3 text-3xl">
                        format_debate
                      </span>
                      Debate Arena
                    </h3>
                    <span className="px-4 py-2 bg-indigo-100/80 text-indigo-700 rounded-full text-sm font-bold backdrop-blur-sm shadow-sm">
                      7 Active Debates
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 text-lg">
                    Engage in theoretical AI discussions, vote on positions, and
                    gain insight from NeuralSpirit analysis.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="bg-white/80 rounded-xl p-4 hover:bg-white transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md group transform hover:-translate-y-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-blue-800 text-lg group-hover:text-indigo-600 transition-colors">
                          Are Transformers Overhyped?
                        </h4>
                        <div className="flex items-center space-x-2">
                          <span className="flex items-center text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium shadow-sm group-hover:shadow">
                            <span className="material-symbols-outlined text-[16px] mr-1">
                              trending_up
                            </span>
                            52
                          </span>
                          <span className="flex items-center text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium shadow-sm group-hover:shadow">
                            <span className="material-symbols-outlined text-[16px] mr-1">
                              trending_down
                            </span>
                            36
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center mt-3 text-xs text-gray-500">
                        <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 mr-3 font-medium shadow-sm">
                          Hot Topic
                        </span>
                        <span>24 participants</span>
                        <span className="mx-2">•</span>
                        <span>Closing in 2 days</span>
                      </div>
                    </div>

                    <div className="bg-white/80 rounded-xl p-4 hover:bg-white transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md group transform hover:-translate-y-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-blue-800 text-lg group-hover:text-indigo-600 transition-colors">
                          Will Symbolic AI Make a Comeback?
                        </h4>
                        <div className="flex items-center space-x-2">
                          <span className="flex items-center text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium shadow-sm group-hover:shadow">
                            <span className="material-symbols-outlined text-[16px] mr-1">
                              trending_up
                            </span>
                            28
                          </span>
                          <span className="flex items-center text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium shadow-sm group-hover:shadow">
                            <span className="material-symbols-outlined text-[16px] mr-1">
                              trending_down
                            </span>
                            31
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center mt-3 text-xs text-gray-500">
                        <span className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 mr-3 font-medium shadow-sm">
                          NeuralSpirit Pick
                        </span>
                        <span>18 participants</span>
                        <span className="mx-2">•</span>
                        <span>Closing in 5 days</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-bold transition-all duration-300 text-lg hover:translate-x-1 group"
                  >
                    View all debates
                    <span className="material-symbols-outlined ml-1 transition-transform duration-300 group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.01] mt-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-extrabold text-purple-800 flex items-center">
                      <span className="material-symbols-outlined mr-3 text-3xl">
                        vault
                      </span>
                      AI Legacy Vault
                    </h3>
                    <span className="px-4 py-2 bg-purple-100/80 text-purple-700 rounded-full text-sm font-bold backdrop-blur-sm shadow-sm">
                      132 Entries
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 text-lg">
                    Permanent archive of legendary community contributions,
                    models, proofs, and challenge solutions.
                  </p>

                  <div className="bg-white/80 rounded-xl p-5 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md mb-6 group transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <div className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 p-3 flex items-center justify-center mr-4 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                        <span className="material-symbols-outlined text-white text-2xl">
                          stars
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-purple-800 text-lg group-hover:text-purple-600 transition-colors">
                          Optimized Transformer Implementation
                        </h4>
                        <p className="text-base text-gray-600 mt-2">
                          A highly efficient implementation of transformer
                          architecture with 35% reduced computation
                          requirements.
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center text-xs text-gray-500">
                            <span className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 mr-2 font-medium shadow-sm">
                              Model
                            </span>
                            <span className="flex items-center">
                              <span className="material-symbols-outlined text-[16px] mr-1">
                                verified
                              </span>
                              Verified
                            </span>
                            <span className="mx-2">•</span>
                            <span className="flex items-center">
                              <span className="material-symbols-outlined text-[16px] mr-1">
                                thumb_up
                              </span>
                              328
                            </span>
                          </div>
                          <span className="text-xs text-gray-500 font-medium">
                            By DrTensor
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-bold transition-all duration-300 text-lg hover:translate-x-1 group"
                  >
                    Explore the vault
                    <span className="material-symbols-outlined ml-1 transition-transform duration-300 group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.01]">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-xl font-extrabold text-blue-800 flex items-center">
                      <span className="material-symbols-outlined mr-2 text-2xl">
                        forum
                      </span>
                      Forum Highlights
                    </h3>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 text-sm font-bold transition-colors hover:underline"
                    >
                      View All
                    </a>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/80 rounded-xl p-4 hover:bg-white transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md group transform hover:-translate-y-1">
                      <h4 className="font-semibold text-blue-800 group-hover:text-indigo-600 transition-colors">
                        Neural Odyssey: Chapter 7 Discussion
                      </h4>
                      <div className="flex items-center mt-3 text-xs text-gray-500">
                        <span className="flex items-center">
                          <span className="material-symbols-outlined text-[16px] mr-1">
                            forum
                          </span>
                          56 replies
                        </span>
                        <span className="mx-2">•</span>
                        <span>Updated 2h ago</span>
                      </div>
                    </div>

                    <div className="bg-white/80 rounded-xl p-4 hover:bg-white transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md group transform hover:-translate-y-1">
                      <h4 className="font-semibold text-blue-800 group-hover:text-indigo-600 transition-colors">
                        Tips for Data Alchemy Challenge #3
                      </h4>
                      <div className="flex items-center mt-3 text-xs text-gray-500">
                        <span className="flex items-center">
                          <span className="material-symbols-outlined text-[16px] mr-1">
                            forum
                          </span>
                          32 replies
                        </span>
                        <span className="mx-2">•</span>
                        <span>Updated 6h ago</span>
                      </div>
                    </div>

                    <div className="bg-white/80 rounded-xl p-4 hover:bg-white transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md group transform hover:-translate-y-1">
                      <h4 className="font-semibold text-blue-800 group-hover:text-indigo-600 transition-colors">
                        AI Lab: Share Your Visualizations
                      </h4>
                      <div className="flex items-center mt-3 text-xs text-gray-500">
                        <span className="flex items-center">
                          <span className="material-symbols-outlined text-[16px] mr-1">
                            forum
                          </span>
                          89 replies
                        </span>
                        <span className="mx-2">•</span>
                        <span>Updated 1d ago</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.01]">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-xl font-extrabold text-indigo-800 flex items-center">
                      <span className="material-symbols-outlined mr-2 text-2xl">
                        leaderboard
                      </span>
                      Leaderboard
                    </h3>
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800 text-sm font-bold transition-colors hover:underline"
                    >
                      Full Rankings
                    </a>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-4 border border-yellow-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 flex items-center justify-center text-white font-black mr-4 text-lg shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                          1
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <h4 className="font-bold text-lg">NeuralWizard</h4>
                            <span className="flex items-center text-amber-700 text-xs font-bold">
                              <span className="material-symbols-outlined text-amber-500 mr-1">
                                workspace_premium
                              </span>
                              12,456 pts
                            </span>
                          </div>
                          <div className="flex mt-2 gap-2">
                            <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium shadow-sm">
                              Neural Master
                            </span>
                            <span className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium shadow-sm">
                              245 day streak
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-4 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-400 to-slate-500 flex items-center justify-center text-white font-black mr-4 text-lg shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                          2
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <h4 className="font-bold text-lg">TensorSage</h4>
                            <span className="flex items-center text-gray-700 text-xs font-bold">
                              <span className="material-symbols-outlined text-gray-500 mr-1">
                                workspace_premium
                              </span>
                              11,879 pts
                            </span>
                          </div>
                          <div className="flex mt-2 gap-2">
                            <span className="text-xs px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full font-medium shadow-sm">
                              Debate Champion
                            </span>
                            <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium shadow-sm">
                              183 day streak
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 flex items-center justify-center text-white font-black mr-4 text-lg shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                          3
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <h4 className="font-bold text-lg">DeepMinds</h4>
                            <span className="flex items-center text-orange-700 text-xs font-bold">
                              <span className="material-symbols-outlined text-orange-500 mr-1">
                                workspace_premium
                              </span>
                              10,342 pts
                            </span>
                          </div>
                          <div className="flex mt-2 gap-2">
                            <span className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium shadow-sm">
                              Legacy Contributor
                            </span>
                            <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium shadow-sm">
                              42 challenges
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.01]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-extrabold text-blue-800 flex items-center">
                      <span className="material-symbols-outlined mr-2 text-2xl">
                        event_upcoming
                      </span>
                      Upcoming Events
                    </h3>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 text-sm font-bold transition-colors hover:underline"
                    >
                      All Events
                    </a>
                  </div>

                  <div className="bg-white/80 rounded-xl p-4 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md group transform hover:-translate-y-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-blue-800 group-hover:text-indigo-600 transition-colors">
                          Neural Architecture Workshop
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Learn advanced techniques from top AI researchers
                        </p>
                      </div>
                      <span className="bg-indigo-100 text-indigo-700 rounded-full px-3 py-1 text-xs font-medium">
                        Mar 15
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 mb-8 relative z-10 rounded-2xl flex w-full min-h-screen bg-gradient-to-b from-gray-950 to-black">
            <section className="w-full max-w-7xl mx-auto space-y-8 px-6 py-8">
              <div className="bg-black/40 rounded-2xl p-6 shadow-lg shadow-purple-900/20 border border-purple-900/30 backdrop-blur-xl">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold relative overflow-hidden group">
                    <span className="relative z-10 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600 hover:from-cyan-500 hover:via-fuchsia-600 hover:to-purple-700 transition-all duration-500 font-bold text-lg tracking-wider transform hover:scale-105 hover:rotate-1 uppercase">
                      Dark Room
                    </span>
                    <span className="absolute -left-2 -bottom-1 w-[calc(100%+1rem)] h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-700 ease-in-out rounded-full"></span>
                    <span className="absolute -right-2 top-0 w-[6px] h-[6px] rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></span>
                    <span className="absolute -left-2 top-0 w-[6px] h-[6px] rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 delay-300"></span>
                    <span className="absolute blur-sm -z-10 inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg transform scale-110"></span>
                  </h2>
                  <div className="flex items-center space-x-3">
                    <div className="rounded-full bg-purple-900/40 px-4 py-1.5 text-purple-300 text-sm border border-purple-700/30 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse mr-2"></span>
                      22 Elite Explorers Online
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">
                  Welcome to the{" "}
                  <span className="text-purple-400 font-semibold">
                    Dark Room
                  </span>
                  , where elite minds converge at the precipice of computational
                  chaos. Here, the challenges transcend conventional bounds,
                  requiring not just technical prowess, but cognitive leaps that
                  redefine possibility itself. Collaboration becomes both your
                  greatest ally and most formidable adversary as you navigate
                  through problems where traditional algorithms falter.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-70 transition-all duration-500"></div>
                    <div className="relative bg-black/70 rounded-xl p-5 border border-purple-900/50 h-full transform group-hover:scale-[1.01] transition-all duration-300">
                      <div className="absolute top-3 right-3 px-2 py-1 bg-purple-900/70 rounded-md text-xs font-bold text-purple-300 flex items-center">
                        <span className="material-symbols-outlined text-xs mr-1">
                          military_tech
                        </span>
                        Elite Access
                      </div>
                      <h3 className="text-xl font-bold text-purple-300 mb-3 flex items-center">
                        <span className="material-symbols-outlined mr-2 text-purple-400">
                          psychology
                        </span>
                        Theoretical Abyss
                      </h3>
                      <p className="text-gray-400 mb-4">
                        Dive into abstract theoretical challenges that push
                        beyond implementation into the realm of pure
                        mathematical reasoning. Prove conceptual frameworks
                        using LaTeX and establish foundations for future
                        computational paradigms.
                      </p>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-800/30 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-md hover:shadow-purple-900/30 cursor-pointer group/item">
                          <h4 className="font-semibold text-sm text-purple-300 mb-1 group-hover/item:text-purple-200">
                            Transformer Without Normalization
                          </h4>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">
                              Theoretical
                            </span>
                            <span className="text-xs bg-purple-700/50 rounded-md px-2 py-0.5 text-purple-300">
                              LaTeX
                            </span>
                          </div>
                        </div>
                        <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-800/30 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-md hover:shadow-purple-900/30 cursor-pointer group/item">
                          <h4 className="font-semibold text-sm text-purple-300 mb-1 group-hover/item:text-purple-200">
                            Explainable Adversarial Defense
                          </h4>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">
                              Theoretical
                            </span>
                            <span className="text-xs bg-purple-700/50 rounded-md px-2 py-0.5 text-purple-300">
                              LaTeX
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className="w-full py-2 px-4 bg-gradient-to-r from-purple-900/80 to-indigo-900/80 hover:from-purple-800/80 hover:to-indigo-800/80 text-purple-200 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:shadow-md group-hover:shadow-purple-900/30 border border-purple-800/50">
                        <span className="material-symbols-outlined mr-2 text-sm">
                          explore
                        </span>
                        Explore Theoretical Challenges
                      </button>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-xl blur opacity-25 group-hover:opacity-70 transition-all duration-500"></div>
                    <div className="relative bg-black/70 rounded-xl p-5 border border-cyan-900/50 h-full transform group-hover:scale-[1.01] transition-all duration-300">
                      <div className="absolute top-3 right-3 px-2 py-1 bg-cyan-900/70 rounded-md text-xs font-bold text-cyan-300 flex items-center">
                        <span className="material-symbols-outlined text-xs mr-1">
                          enhanced_encryption
                        </span>
                        Optional
                      </div>
                      <h3 className="text-xl font-bold text-cyan-300 mb-3 flex items-center">
                        <span className="material-symbols-outlined mr-2 text-cyan-400">
                          vpn_key
                        </span>
                        Crypto-IA Challenges
                      </h3>
                      <p className="text-gray-400 mb-4">
                        Explore the intersection of cryptography and artificial
                        intelligence in these optional challenges. Generate
                        quantum-resistant algorithms, create encrypted neural
                        architectures, and more.
                      </p>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-cyan-900/30 p-3 rounded-lg border border-cyan-800/30 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-md hover:shadow-cyan-900/30 cursor-pointer group/item">
                          <h4 className="font-semibold text-sm text-cyan-300 mb-1 group-hover/item:text-cyan-200">
                            Post-Quantum Key via RNN
                          </h4>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">
                              Cryptographic
                            </span>
                            <span className="text-xs bg-cyan-700/50 rounded-md px-2 py-0.5 text-cyan-300">
                              Python
                            </span>
                          </div>
                        </div>
                        <div className="bg-cyan-900/30 p-3 rounded-lg border border-cyan-800/30 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-md hover:shadow-cyan-900/30 cursor-pointer group/item">
                          <h4 className="font-semibold text-sm text-cyan-300 mb-1 group-hover/item:text-cyan-200">
                            Homomorphic ML Pipeline
                          </h4>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">
                              Cryptographic
                            </span>
                            <span className="text-xs bg-cyan-700/50 rounded-md px-2 py-0.5 text-cyan-300">
                              Python
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className="w-full py-2 px-4 bg-gradient-to-r from-cyan-900/80 to-blue-900/80 hover:from-cyan-800/80 hover:to-blue-800/80 text-cyan-200 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:shadow-md group-hover:shadow-cyan-900/30 border border-cyan-800/50">
                        <span className="material-symbols-outlined mr-2 text-sm">
                          lock
                        </span>
                        Unlock Crypto Challenges
                      </button>
                    </div>
                  </div>
                </div>

                <div className="relative mt-10 group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-rose-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition-all duration-500"></div>
                  <div className="relative p-6 bg-gradient-to-br from-black to-gray-900/90 rounded-xl border border-fuchsia-900/50 transition-all duration-300 transform group-hover:scale-[1.01]">
                    <div className="absolute -top-5 left-10 px-4 py-2 bg-black border border-fuchsia-700/50 rounded-lg shadow-lg shadow-fuchsia-900/20">
                      <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-rose-400 flex items-center">
                        <span className="material-symbols-outlined mr-2 text-fuchsia-500">
                          cyclone
                        </span>
                        Chaos Theory
                        <span className="animate-ping absolute ml-1 h-2 w-2 rounded-full bg-fuchsia-400 opacity-75"></span>
                      </h3>
                    </div>

                    <div className="mt-4 flex flex-col md:flex-row items-start md:items-center justify-between mb-4 space-y-4 md:space-y-0">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <div className="px-3 py-1.5 rounded-md bg-fuchsia-900/40 text-fuchsia-300 border border-fuchsia-700/30 flex items-center">
                          <span className="material-symbols-outlined text-sm mr-1.5">
                            update
                          </span>
                          Next Chaos Event: 21:03:44
                        </div>
                        <div className="px-3 py-1.5 rounded-md bg-rose-900/40 text-rose-300 border border-rose-700/30 flex items-center">
                          <span className="material-symbols-outlined text-sm mr-1.5">
                            group
                          </span>
                          48 Participants
                        </div>
                      </div>
                      <span className="text-sm text-gray-400">
                        Rules by{" "}
                        <span className="text-fuchsia-400 font-semibold">
                          NeuralSpirit
                        </span>
                      </span>
                    </div>

                    <p className="text-gray-300 mb-5">
                      The{" "}
                      <span className="font-semibold text-fuchsia-400">
                        Chaos Theory
                      </span>{" "}
                      is our experimental quarterly collaborative challenge
                      where participants face randomly generated, evolving
                      problems. Success requires rapid adaptation,
                      unconventional thinking, and strategic collaboration amid
                      deliberately induced uncertainty.
                    </p>

                    <div className="bg-black/60 rounded-lg p-4 border border-fuchsia-900/30 mb-5">
                      <h4 className="text-lg font-semibold text-fuchsia-300 mb-3 flex items-center">
                        <span className="material-symbols-outlined mr-2">
                          assignment
                        </span>
                        Current Challenge: Bifurcation Stabilization
                      </h4>
                      <p className="text-gray-400 mb-3">
                        A chaotic neural system exhibiting strange attractor
                        patterns has been deployed. Your collective task:
                        stabilize this model within 48 hours as it continuously
                        evolves through bifurcation points. The pattern of
                        evolution is itself machine-learned and will adapt to
                        your stabilization attempts.
                      </p>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-rose-900/30 text-xs text-rose-300 rounded flex items-center">
                            <span className="material-symbols-outlined text-xs mr-1">
                              schedule
                            </span>
                            36:12:57 Remaining
                          </span>
                          <span className="px-2 py-1 bg-amber-900/30 text-xs text-amber-300 rounded flex items-center">
                            <span className="material-symbols-outlined text-xs mr-1">
                              trending_up
                            </span>
                            Difficulty: Extreme
                          </span>
                        </div>
                        <span className="text-sm text-gray-400">
                          Success Rate:{" "}
                          <span className="text-rose-400">12%</span>
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
                      <div className="bg-gradient-to-br from-black/80 to-fuchsia-950/20 p-3 rounded-lg border border-fuchsia-900/30 transform hover:scale-105 transition-all duration-300 cursor-pointer group/phase">
                        <h5 className="font-semibold text-sm text-fuchsia-300 mb-1 group-hover/phase:text-fuchsia-200">
                          Phase 1: Initial Chaos
                        </h5>
                        <span className="text-xs text-gray-400">Completed</span>
                        <div className="mt-2 w-full h-1 bg-gray-800 rounded-full">
                          <div className="h-full w-full bg-gradient-to-r from-fuchsia-500 to-rose-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-black/80 to-fuchsia-950/20 p-3 rounded-lg border border-fuchsia-900/30 transform hover:scale-105 transition-all duration-300 cursor-pointer group/phase">
                        <h5 className="font-semibold text-sm text-fuchsia-300 mb-1 group-hover/phase:text-fuchsia-200">
                          Phase 2: Adaptation
                        </h5>
                        <span className="text-xs text-gray-400">Completed</span>
                        <div className="mt-2 w-full h-1 bg-gray-800 rounded-full">
                          <div className="h-full w-full bg-gradient-to-r from-fuchsia-500 to-rose-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-black/80 to-fuchsia-950/20 p-3 rounded-lg border border-fuchsia-900/30 transform hover:scale-105 transition-all duration-300 cursor-pointer group/phase relative">
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-fuchsia-400 rounded-full animate-ping"></div>
                        <h5 className="font-semibold text-sm text-fuchsia-300 mb-1 group-hover/phase:text-fuchsia-200">
                          Phase 3: Convergence
                        </h5>
                        <span className="text-xs text-fuchsia-400">
                          In Progress
                        </span>
                        <div className="mt-2 w-full h-1 bg-gray-800 rounded-full">
                          <div className="h-full w-3/5 bg-gradient-to-r from-fuchsia-500 to-rose-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-black/80 to-fuchsia-950/20 p-3 rounded-lg border border-fuchsia-900/30 transform hover:scale-105 transition-all duration-300 cursor-pointer group/phase opacity-70">
                        <h5 className="font-semibold text-sm text-fuchsia-300 mb-1 group-hover/phase:text-fuchsia-200">
                          Phase 4: Equilibrium
                        </h5>
                        <span className="text-xs text-gray-400">Locked</span>
                        <div className="mt-2 w-full h-1 bg-gray-800 rounded-full">
                          <div className="h-full w-0 bg-gradient-to-r from-fuchsia-500 to-rose-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <button className="px-4 py-2.5 bg-gradient-to-r from-fuchsia-700 to-rose-700 hover:from-fuchsia-600 hover:to-rose-600 text-white rounded-lg transition-all duration-300 flex items-center shadow-lg shadow-fuchsia-900/30 hover:shadow-fuchsia-900/50 transform hover:translate-y-[-2px]">
                        <span className="material-symbols-outlined mr-2">
                          hub
                        </span>
                        Join Chaos Chamber
                      </button>
                      <button className="px-4 py-2.5 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-lg transition-all duration-300 flex items-center border border-fuchsia-900/30 hover:border-fuchsia-800/50 transform hover:translate-y-[-2px]">
                        <span className="material-symbols-outlined mr-2">
                          monitoring
                        </span>
                        View Analytics
                      </button>
                      <button className="px-4 py-2.5 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-lg transition-all duration-300 flex items-center border border-fuchsia-900/30 hover:border-fuchsia-800/50 transform hover:translate-y-[-2px]">
                        <span className="material-symbols-outlined mr-2">
                          history
                        </span>
                        Previous Chaos Events
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-25 group-hover:opacity-70 transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-xl p-6 shadow-lg shadow-indigo-900/20 border border-indigo-900/30">
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 mb-4">
                    Validation Protocols
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-black/50 p-4 rounded-lg border border-blue-900/30 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-md hover:shadow-blue-900/30 cursor-pointer">
                      <h4 className="font-semibold text-blue-300 mb-2 flex items-center">
                        <span className="material-symbols-outlined mr-2 text-blue-400">
                          memory
                        </span>
                        Numerical Validation
                      </h4>
                      <p className="text-gray-400 text-sm mb-3">
                        Precise numerical solutions evaluated against complex
                        mathematical criteria. Results must match within
                        specified tolerances across multiple dimensional spaces.
                      </p>
                      <div className="px-3 py-2 bg-blue-900/20 rounded-md text-sm text-blue-300 border border-blue-900/30">
                        Format: CSV, NPZ, HDF5
                      </div>
                    </div>

                    <div className="bg-black/50 p-4 rounded-lg border border-indigo-900/30 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-md hover:shadow-indigo-900/30 cursor-pointer">
                      <h4 className="font-semibold text-indigo-300 mb-2 flex items-center">
                        <span className="material-symbols-outlined mr-2 text-indigo-400">
                          data_object
                        </span>
                        Model Validation
                      </h4>
                      <p className="text-gray-400 text-sm mb-3">
                        Complete model architectures evaluated for performance,
                        efficiency, and theoretical soundness. Models must
                        satisfy specified constraints and edge cases.
                      </p>
                      <div className="px-3 py-2 bg-indigo-900/20 rounded-md text-sm text-indigo-300 border border-indigo-900/30">
                        Format: JSON, ONNX, TF SavedModel
                      </div>
                    </div>

                    <div className="bg-black/50 p-4 rounded-lg border border-purple-900/30 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-md hover:shadow-purple-900/30 cursor-pointer">
                      <h4 className="font-semibold text-purple-300 mb-2 flex items-center">
                        <span className="material-symbols-outlined mr-2 text-purple-400">
                          code
                        </span>
                        Algorithmic Validation
                      </h4>
                      <p className="text-gray-400 text-sm mb-3">
                        Full algorithm implementations evaluated for
                        correctness, efficiency, and elegance. Solutions must
                        handle extreme cases and satisfy complexity constraints.
                      </p>
                      <div className="px-3 py-2 bg-purple-900/20 rounded-md text-sm text-purple-300 border border-purple-900/30">
                        Format: Python, C++, Julia
                      </div>
                    </div>

                    <div className="bg-black/50 p-4 rounded-lg border border-cyan-900/30 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-md hover:shadow-cyan-900/30 cursor-pointer">
                      <h4 className="font-semibold text-cyan-300 mb-2 flex items-center">
                        <span className="material-symbols-outlined mr-2 text-cyan-400">
                          security
                        </span>
                        Secure Sandbox
                      </h4>
                      <p className="text-gray-400 text-sm mb-3">
                        Isolated execution environment for live validation of
                        code and algorithms. All submissions run in a controlled
                        environment with resource limitations and security
                        constraints.
                      </p>
                      <div className="px-3 py-2 bg-cyan-900/20 rounded-md text-sm text-cyan-300 border border-cyan-900/30">
                        Format: Docker, WebAssembly
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <section className="max-w-7xl mx-auto mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="col-span-2">
                <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg shadow-indigo-100/30 relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-indigo-200/40">
                  <div className="absolute -right-16 -top-16 w-40 h-40 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-70 animate-pulse"></div>
                  <div className="absolute -left-16 -bottom-16 w-40 h-40 bg-gradient-to-tr from-blue-200 to-indigo-200 rounded-full opacity-70 animate-pulse"></div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-8 transform transition-transform duration-300 hover:scale-105">
                      <span className="material-symbols-outlined text-4xl mr-4 text-indigo-600 bg-indigo-100/80 p-3 rounded-xl shadow-md">
                        psychology_alt
                      </span>
                      <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                        AGI Think Tank avec Idea Evolution Engine
                      </h2>
                    </div>

                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      Explore the depths of Artificial General Intelligence
                      through collaborative thinking. Our unique Idea Evolution
                      Engine simulates how your contributions could shape the
                      future of AGI development.
                    </p>

                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl mb-8 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-md">
                      <h3 className="font-bold text-xl text-indigo-700 mb-4 flex items-center">
                        <span className="material-symbols-outlined mr-3 text-2xl animate-bounce">
                          neurology
                        </span>
                        How Idea Evolution Works
                      </h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start group">
                          <span className="material-symbols-outlined text-indigo-500 mr-3 mt-0.5 transform transition-transform duration-300 group-hover:translate-x-1">
                            arrow_right
                          </span>
                          <span className="group-hover:text-indigo-700 transition-colors duration-300">
                            Your discussions and posts influence our simulated
                            AGI model parameters
                          </span>
                        </li>
                        <li className="flex items-start group">
                          <span className="material-symbols-outlined text-indigo-500 mr-3 mt-0.5 transform transition-transform duration-300 group-hover:translate-x-1">
                            arrow_right
                          </span>
                          <span className="group-hover:text-indigo-700 transition-colors duration-300">
                            Keywords and concepts are translated into neural
                            parameters
                          </span>
                        </li>
                        <li className="flex items-start group">
                          <span className="material-symbols-outlined text-indigo-500 mr-3 mt-0.5 transform transition-transform duration-300 group-hover:translate-x-1">
                            arrow_right
                          </span>
                          <span className="group-hover:text-indigo-700 transition-colors duration-300">
                            Monthly resets allow for testing and visualization
                            of the collective intelligence
                          </span>
                        </li>
                        <li className="flex items-start group">
                          <span className="material-symbols-outlined text-indigo-500 mr-3 mt-0.5 transform transition-transform duration-300 group-hover:translate-x-1">
                            arrow_right
                          </span>
                          <span className="group-hover:text-indigo-700 transition-colors duration-300">
                            Interface design evolves monthly based on community
                            contributions
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white rounded-xl p-5 shadow-md shadow-indigo-100/30 hover:shadow-xl hover:shadow-indigo-200/40 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group">
                        <div className="flex items-center mb-3">
                          <span className="material-symbols-outlined text-blue-600 text-2xl mr-3 p-2 bg-blue-50 rounded-lg group-hover:animate-pulse transition-all duration-300">
                            forum
                          </span>
                          <h4 className="font-bold text-xl text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                            Consciousness Discussions
                          </h4>
                        </div>
                        <p className="text-gray-600 mb-4">
                          Philosophical debates on artificial consciousness and
                          the nature of machine cognition.
                        </p>
                        <div className="mt-3 flex items-center text-sm text-indigo-600 font-medium">
                          <span className="mr-3">128 active threads</span>
                          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-2 transition-transform duration-300">
                            arrow_forward
                          </span>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-5 shadow-md shadow-indigo-100/30 hover:shadow-xl hover:shadow-indigo-200/40 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group">
                        <div className="flex items-center mb-3">
                          <span className="material-symbols-outlined text-purple-600 text-2xl mr-3 p-2 bg-purple-50 rounded-lg group-hover:animate-pulse transition-all duration-300">
                            memory
                          </span>
                          <h4 className="font-bold text-xl text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                            AGI Architecture
                          </h4>
                        </div>
                        <p className="text-gray-600 mb-4">
                          Technical discussions on neural frameworks, cognitive
                          architectures, and learning systems.
                        </p>
                        <div className="mt-3 flex items-center text-sm text-purple-600 font-medium">
                          <span className="mr-3">86 active threads</span>
                          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-2 transition-transform duration-300">
                            arrow_forward
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center group transform hover:scale-105">
                        <span className="material-symbols-outlined mr-3 group-hover:animate-bounce text-xl">
                          lightbulb
                        </span>
                        Submit New Idea
                      </button>

                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-800 flex items-center text-lg font-medium group"
                      >
                        <span>Explore All Topics</span>
                        <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform duration-300">
                          arrow_forward
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg shadow-indigo-100/30 mb-6 transform transition-all duration-500 hover:shadow-xl hover:shadow-indigo-200/40 hover:translate-y-[-5px]">
                  <h3 className="font-bold text-xl text-gray-800 mb-6 flex items-center">
                    <span className="material-symbols-outlined mr-3 text-2xl text-indigo-600 bg-indigo-50 p-2 rounded-lg">
                      insights
                    </span>
                    Idea Impact Metrics
                  </h3>

                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700 font-medium">
                        Consciousness Understanding
                      </span>
                      <span className="text-indigo-600 font-bold">72%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden shadow-inner">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-1000 transform hover:scale-x-105"
                        style={{ width: "72%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700 font-medium">
                        Learning Optimization
                      </span>
                      <span className="text-indigo-600 font-bold">64%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden shadow-inner">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-1000 transform hover:scale-x-105"
                        style={{ width: "64%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700 font-medium">
                        Neuromorphic Architecture
                      </span>
                      <span className="text-indigo-600 font-bold">89%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden shadow-inner">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-1000 transform hover:scale-x-105"
                        style={{ width: "89%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700 font-medium">
                        Ethical Parameters
                      </span>
                      <span className="text-indigo-600 font-bold">58%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden shadow-inner">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-1000 transform hover:scale-x-105"
                        style={{ width: "58%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center justify-center group text-lg transition-all duration-300 hover:font-bold"
                    >
                      <span>View Complete Analytics</span>
                      <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform duration-300">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg shadow-indigo-100/30 transform transition-all duration-500 hover:shadow-xl hover:shadow-indigo-200/40 hover:translate-y-[-5px]">
                  <h3 className="font-bold text-xl text-gray-800 mb-6 flex items-center">
                    <span className="material-symbols-outlined mr-3 text-2xl text-purple-600 bg-purple-50 p-2 rounded-lg animate-pulse">
                      schedule
                    </span>
                    Next Neural Reset
                  </h3>

                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-4 shadow-inner">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-bold text-lg">
                        Reset Date:
                      </span>
                      <span className="text-indigo-700 font-extrabold text-xl bg-white py-2 px-4 rounded-lg shadow-sm">
                        May 15, 2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
