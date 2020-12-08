(ns app.core
  (:require [reagent.core :as reagent]))


;; Para conectar o Shadow no Emacs, com o yarn start já iniciado
;; SPC m C
;; localhost: 9000
;; shadow
;; :app

;; Direto do Emacs
;; M x cider-jack-in-cljs, ou SPC m "
;; shadow
;; :app
;; dentro do repl: (ns core) muda para este ns

;; Componentes do Hiccup são funções que retornam HTML

(defn main-component []
  [:div
   [:h1 {:class "text-4xl font-bold"} "Primeiro componente !!"]])

;;Vai renderizar a função app, no elemento root do HTML
(defn mount [c]
  (reagent/render [c] (js/document.getElementById "root")))



(defn ^export init []
  (mount main-component))
