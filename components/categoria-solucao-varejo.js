import React from 'react'

import PropTypes from 'prop-types'

const CategoriaSolucaoVarejo = (props) => {
  return (
    <>
      <div
        className={`categoria-solucao-varejo-categoria-solucao-varejo ${props.rootClassName} `}
      >
        <img
          alt={props.Image_alt}
          src={props.Image_src}
          loading="lazy"
          className="categoria-solucao-varejo-image"
        />
        <div className="categoria-solucao-varejo-container">
          <h2 className="categoria-solucao-varejo-text">{props.heading}</h2>
          <span className="categoria-solucao-varejo-text1">{props.text}</span>
          <button className="categoria-solucao-varejo-button button">
            {props.button}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .categoria-solucao-varejo-categoria-solucao-varejo {
            width: 100%;
            display: flex;
            position: relative;
            align-items: stretch;
            border-radius: 16px;
            flex-direction: row;
            background-color: var(--dl-color-gray-white);
          }
          .categoria-solucao-varejo-image {
            width: 320px;
            height: 180px;
            min-width: 320px;
            align-self: flex-start;
            min-height: 180px;
            object-fit: cover;
            border-radius: 16px;
          }
          .categoria-solucao-varejo-container {
            height: 180px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .categoria-solucao-varejo-text {
            color: var(--dl-color-gray-000000);
            text-align: left;
            transition: 150;
            line-height: 1.5;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .categoria-solucao-varejo-text:hover {
            text-decoration: underline;
          }
          .categoria-solucao-varejo-text1 {
            color: var(--dl-color-gray-000000);
            text-align: left;
            transition: 150ms;
            line-height: 1.5;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .categoria-solucao-varejo-text1:hover {
            text-decoration: underline;
          }
          .categoria-solucao-varejo-button {
            display: none;
            margin-top: var(--dl-space-space-unit);
            border-width: 0px;
            margin-bottom: var(--dl-space-space-unit);
          }

          @media (max-width: 991px) {
            .categoria-solucao-varejo-image {
              margin-bottom: 0px;
            }
            .categoria-solucao-varejo-container {
              margin-right: 0px;
            }
            .categoria-solucao-varejo-text {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .categoria-solucao-varejo-text1 {
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .categoria-solucao-varejo-categoria-solucao-varejo {
              width: var(--dl-size-size-xxlarge);
              box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.05);
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .categoria-solucao-varejo-image {
              width: 100%;
              height: var(--dl-size-size-large);
              min-width: 0px;
              align-self: center;
              min-height: auto;
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;
            }
            .categoria-solucao-varejo-container {
              height: auto;
              align-items: center;
              margin-left: 0px;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .categoria-solucao-varejo-text {
              margin-top: var(--dl-space-space-unit);
              padding-top: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .categoria-solucao-varejo-text1 {
              text-align: justify;
              padding-top: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: 0px;
            }
            .categoria-solucao-varejo-button {
              color: #ffffff;
              display: flex;
              font-size: 12px;
              font-style: normal;
              font-weight: 900;
              border-width: 0px;
              border-radius: 20px;
              background-color: var(--dl-color-gray-222222);
            }
            .categoria-solucao-varejo-root-class-name {
              margin-bottom: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .categoria-solucao-varejo-image {
              min-width: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

CategoriaSolucaoVarejo.defaultProps = {
  button: 'SAIBA MAIS',
  heading: 'Varejo',
  text: 'Emissor S@T fiscal e NFC-e com integração aos módulos Pré-venda, Delivery, Comandas, Sirius App Comandas e Pré-venda, Sirius Web Lojas, Sirius Market Place e cartão de crédito/TEF.',
  Image_alt: 'image',
  Image_src: '/playground_assets/comercio-varejista-1500w.webp',
  rootClassName: '',
}

CategoriaSolucaoVarejo.propTypes = {
  button: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  Image_alt: PropTypes.string,
  Image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CategoriaSolucaoVarejo