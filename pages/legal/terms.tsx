import Head from "next/head";
import { Container } from "@mui/material";
import styles from "../../styles/Terms.module.scss";
import { Text } from "../../src/components/Text";

const terms = `
<h6>Description of Services</h6>
In the Site, woodland provides members with access to sales of woodland products online (the "Service"). Members are notified about sales each day via Email and SMS on their registered Email id and Phone number.

<h6>License and Site Access</h6>
woodland grants you a limited license to access and make personal use of the Site and the Service. This license does not include any downloading or copying of account information for the benefit of another vendor or any other third party; caching, unauthorized hypertext links to the Site and the framing of any Content available through the Site uploading, posting, or transmitting any content that you do not have a right to make available (such as the intellectual property of another party); uploading, posting, or transmitting any material that contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment; any action that imposes or may impose an unreasonable or disproportionately large load on Wood's infrastructure; or any use of data mining, robots, or similar data gathering and extraction tools. You may not bypass any measures used by woodland to prevent or restrict access to the Site. Any unauthorized use by you shall terminate the permission or license granted to you by woodland.

<h6>License and Site Access</h6>
The woodland Service is not available to minors under the age of 18 or FIRST THING WHO ARE 'INCOMPETENT TO CONTRACT' UNDER THE INDIAN CONTRACT AD, 1872 OR to any users suspended or removed from the system by woodland for any reason. THE SAME CONDITION, AS TO ELIGIBILITY FOR MEMBERSHIP AS LAID UNDER THE INDIAN CONTRACT AD, 1872 IS ALSO APPLICABLE TO THE PEOPLE JOINING FROM THE STATE OF JAMMU & Kashmir, FOR THE PURPOSE OF USING THIS SITE. Users may not have more than one account. Maintaining more than one account by a user shall amount to fraudulent act on part of the user and attract actions against such user in accordance with the terms of clause 8 below. Additionally, users are prohibited from selling, trading, or otherwise transferring your woodland account to another party. If you do not qualify, you may not use the woodland Service or the Site.

<h6>Return Policy</h6>
a). A request for return can be raised through care@woodlandworldwide.com within 48 hours of receipt of product by 
      mentioning the reason for return.
b). Return of Products will be accepted only if they are returned in their original packaging, invoice and the item is 
      unworn and has all tags attached. Woodland reserves the right to deny refund if the item does not meet its Return 

<h6>Policy guidelines.</h6>
c). We will arrange for a return pick-up of your order from the original delivery address and the courier shall pick it within 
      72 hours of your request.
d). Please bear in mind it may take 5-7 working days for the Product to reach back to our Order processing centre.
e). Return will be processed only when the product reach back to our Order processing centre.
f). Return will not be entertained through woodland retail outlets.

<h6>Cancellation Policy</h6>
Please note that there may be certain orders thast we are unable to accept and must cancel. We reserve the right, at our sole discretion, to refuse or cancel any order for any reason at any point of time. Some situations that may result in your order being cancelled shall include limitations on quantities available, delivery limitations, inaccuracies or errors in product or pricing information, or any defect regarding the quality of the product. We will intimate you if all or any portion of your order is cancelled. In case of prepaid orders which is cancelled, the paid amount will be reversed back in your original payment mode.
`;

export default function LegalTermsAndConditions() {

  ///line ends are replaced by <br/>
  const termsContent = terms.replaceAll("\n", "<br/>");

  return (
    <>
      <Head>
        <title>Terms and conditions | Capcons</title>
        <meta
          name="description"
          content="Capcons is a social network based on the concept of social circles, It will make being social more secure, more colourful, more meaningful and more vibrant"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Container maxWidth="xl" className={styles.container}>
          <Text variant="heading">Terms and conditions</Text>
          <div className={styles.terms}>
            <Text
              variant="body"
              dangerouslySetInnerHTML={{
                __html: termsContent,
              }}
            ></Text>
          </div>
        </Container>
      </main>
    </>
  );
}
