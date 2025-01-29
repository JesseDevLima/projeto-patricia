"use client";
export const formConfigs = {
  cliente: {
    title: "Cadastro de Cliente",
    clientLabel: "Código do Cliente",
    dataCad: {
      id: "dataCad",
      label: "Data de Cadastro",
      type: "text",
      required: true,
    },
    fields: {
      leftColumn: [
        {
          id: "razaoSocial",
          label: "Razão Social",
          type: "text",
          required: true,
        },
        {
          id: "cnpj",
          label: "CNPJ",
          type: "text",
          required: true,
          mask: "CNPJ",
        },
        {
          id: "ie",
          label: "IE",
          type: "text",
          required: true,
          mask: "IE",
        },
        {
          id: "endereco",
          isRow: true,
          fields: [
            {
              id: "endereco",
              label: "END",
              type: "text",
              required: false,
            },
            {
              id: "endNumero",
              label: "Nº",
              type: "text",
              required: false,
            },
            {
              id: "cep",
              label: "CEP",
              type: "text",
              required: false,
              mask: "CEP",
            },
          ],
        },
        {
          id: "localizacao",
          isRow: true,
          fields: [
            { id: "cidade", label: "CIDADE", type: "text", required: false },
            { id: "estado", label: "ESTADO", type: "text", required: false },
            { id: "bairro", label: "BAIRRO", type: "text", required: false },
          ],
        },
        {
          id: "telefones",
          isRow: true,
          fields: [
            {
              id: "telefoneFixo",
              label: "Tel Fixo",
              type: "tel",
              required: false,
              prefix: "(11)",
              mask: "TEL",
            },
            {
              id: "celular",
              label: "Tel Cel",
              type: "tel",
              required: false,
              prefix: "(11)",
              mask: "CEL",
            },
          ],
        },
        {
          id: "emails",
          isRow: true,
          fields: [
            { id: "email", label: "E-mail", type: "email", required: false },
            {
              id: "emailFin",
              label: "E-mail Financeiro",
              type: "email",
              required: false,
            },
          ],
        },
        {
          id: "suframa",
          label: "Suframa",
          type: "text",
          require: false,
          mask: "Suframa",
        },
        { id: "transp", label: "Transportadora", type: "text" },
        {
          id: "tel",
          label: "Telefone",
          type: "tel",
          prefix: "(11)",
          mask: "TEL",
        },
      ],
    },
  },
  fornecedor: {
    title: "Cadastro de Fornecedor",
    dataCad: true,
    codLabel: "Código do fornecedor",
    fields: {
      leftColumn: [
        {
          id: "razaoSocial",
          label: "Razão Social",
          type: "text",
          required: true,
        },
        {
          id: "cnpj",
          label: "CNPJ",
          type: "text",
          required: true,
          mask: "CNPJ",
        },
        {
          id: "ie",
          label: "IE",
          type: "text",
          required: true,
          mask: "IE",
        },
        {
          id: "endereco",
          isRow: true,
          fields: [
            {
              id: "endereco",
              label: "END",
              type: "text",
              required: false,
            },
            {
              id: "endNumero",
              label: "Nº",
              type: "text",
              required: false,
            },
            {
              id: "cep",
              label: "CEP",
              type: "text",
              required: false,
              mask: "CEP",
            },
          ],
        },
        {
          id: "localizacao",
          isRow: true,
          fields: [
            { id: "cidade", label: "CIDADE", type: "text", required: false },
            { id: "estado", label: "ESTADO", type: "text", required: false },
            { id: "bairro", label: "BAIRRO", type: "text", required: false },
          ],
        },
        {
          id: "telefones",
          isRow: true,
          fields: [
            {
              id: "telefoneFixo",
              label: "Tel Fixo",
              type: "tel",
              required: false,
              prefix: "( )",
              mask: "TEL",
            },
            {
              id: "celular",
              label: "Tel Cel",
              type: "tel",
              required: false,
              prefix: "(11)",
              mask: "CEL",
            },
          ],
        },
        {
          id: "emailPedido",
          label: "E-mail Pedido",
          type: "email",
          required: false,
        },
        {
          id: "emailFin",
          label: "E-mail Fina:",
          type: "email",
          required: false,
        },
      ],
      extras: [
        {
          id: "comissao",
          label: "Comissao",
          type: "text",
          required: false,
          mask: "Comissão",
          defaultValue: "",
        },
        {
          id: "dataRecebimento",
          label: "Data de Recebimento",
          type: "text",
          required: false,
          mask: "Data de Recebimento",
          defaultValue: "",
        },
      ],

      obs: true,
    },
  },
  transportadora: {
    title: "Cadastro de Transportadora",
    dataCad: true,
    codLabel: "Código da Transportadora:",
    fields: {
      leftColumn: [
        {
          id: "razaoSocial",
          label: "Razão Social",
          type: "text",
          required: true,
        },
        {
          id: "cnpj",
          label: "CNPJ",
          type: "text",
          required: true,
          mask: "CNPJ",
        },
        {
          id: "ie",
          label: "IE",
          type: "text",
          required: true,
          mask: "IE",
        },
        {
          id: "endereco",
          isRow: true,
          fields: [
            {
              id: "endereco",
              label: "END",
              type: "text",
              required: false,
            },
            {
              id: "endNumero",
              label: "Nº",
              type: "text",
              required: false,
            },
            {
              id: "cep",
              label: "CEP",
              type: "text",
              required: false,
              mask: "CEP",
            },
          ],
        },
        {
          id: "localizacao",
          isRow: true,
          fields: [
            { id: "cidade", label: "CIDADE", type: "text", required: false },
            { id: "estado", label: "ESTADO", type: "text", required: false },
            { id: "bairro", label: "BAIRRO", type: "text", required: false },
          ],
        },
        {
          id: "telefones",
          isRow: true,
          fields: [
            {
              id: "telefoneFixo",
              label: "Tel Fixo",
              type: "tel",
              required: false,
              prefix: "(11)",
              mask: "TEL",
              defaultValue: "",
            },
            {
              id: "celular",
              label: "Tel Cel",
              type: "tel",
              required: false,
              prefix: "(11)",
              mask: "CEL",
              defaultValue: "",
            },
          ],
        },
        { id: "email", label: "E-mail", type: "email", required: false },
        {
          id: "emailFina",
          label: "E-mail Financeiro",
          type: "email",
          required: false,
        },
      ],
      obs: true,
    },
  },
};