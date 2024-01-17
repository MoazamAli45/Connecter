// import MailchimpSubscribe from "react-mailchimp-subscribe";
// import NewsLetterForm from "./NewsLetterForm";

// const NewsletterSubscribe = ({ styles }) => {
//   const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAIL_CHIMP_URL;

//   return (
//     <MailchimpSubscribe
//       url={MAILCHIMP_URL}
//       render={(props) => {
//         const { subscribe, status, message } = props || {};
//         return (
//           <NewsLetterForm
//             status={status}
//             message={message}
//             onValidate={(formData) => subscribe(formData)}
//             styles={styles}
//           />
//         );
//       }}
//     />
//   );
// };

// export default NewsletterSubscribe;
