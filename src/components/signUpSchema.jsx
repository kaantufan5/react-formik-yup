import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  fullName: Yup.string()
    .max(20, " Must be 20 or less character")
    .required("Lütfen fullname kısmını boş bırakmayınız."),
  email: Yup.string()
    .email("Lütfen geçerli bir email adresi giriniz.")
    .required("Lütfen email kısmını boş bırakmayınız."),
  password: Yup.string()
    .min(8, " Şifre En az 8 karakter içermelidir.")
    .max(16, " Şifre en fazla 16 karakter olmalıdır.")
    .required("Lütfen password kısmını boş bırakmayınız.")
    .matches(/\d+/, " Şifre rakam içermelidir.")
    .matches(/[a-z]+/, " Şifre küçük harf içermelidir.")
    .matches(/[A-Z]+/, " Şifre büyük harf içermelidir.")
    .matches(/[!?/{}<>%&$#£.+-]+/, " Şifre özel harf içermelidir."),
});
