import React from 'react';
import { Container, Typography, Paper, Link } from '@mui/material';
import Navbar from '../components/Navbar';
import { Link as RouterLink } from 'react-router-dom';
import Footer from '../components/Footer';
export function TermsAndConditions() {
    return (
        <>
        <Navbar/>
        <Container component="main" maxWidth="md" sx={{ mt: 5 }}>
            <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Terms & Conditions
                </Typography>
                <Typography variant="body1" paragraph>
                    Please read these Terms and Conditions carefully before using our website.
                </Typography>
                <Typography variant="body1" paragraph>
                    Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who wish to access or use the Service.
                </Typography>
                <Typography variant="body1" paragraph>
                    By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you do not have permission to access the Service.
                </Typography>
                <Typography variant="body1" paragraph>
                    We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    Communications
                </Typography>
                <Typography variant="body1" paragraph>
                    By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    Purchases
                </Typography>
                <Typography variant="body1" paragraph>
                All products listed on MilkDelights are subject to availability.

We reserve the right to refuse or cancel any order for any reason, including limitations on quantities, inaccuracies in product information, or issues identified by our fraud detection team.

Prices for products are subject to change without notice.
                </Typography>
                {/* <Typography variant="body1" paragraph>
                    You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.
                </Typography> */}
                 <Typography variant="h5" sx={{ mt: 4 }}>
                    Payments
                </Typography>
                <Typography variant="body1" paragraph>
                    The service may employ the use of third party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our <Link component={RouterLink} to="/privacy-policy">Privacy Policy</Link>. <br/>
                    All payments are processed securely through our integrated payment gateway.By providing your payment information, you represent that you have the legal right to use the payment method provided. In the event of payment failure, your order may be canceled or delayed.
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                Cancellations, Returns, and Refunds
                </Typography>
                <Typography variant="body1" paragraph>
                - Orders can be canceled before shipment by contacting our support team. <br/>

- Due to the perishable nature of dairy products, returns are only accepted in cases of damaged or defective items. <br/>

- Refunds, if applicable, will be processed within 7-10 business days.
                </Typography>
                {/* <Typography variant="body1" paragraph>
                    We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.
                </Typography> */}
                <Typography variant="h5" sx={{ mt: 4 }}>
                   User Conduct
                </Typography>
                <Typography variant="body1" paragraph>
                You agree not to use the application for any unlawful purpose or in a way that may damage, disable, or impair the platform.

                </Typography>
                <Typography variant="body1" paragraph>
                You must not upload or transmit any viruses, malicious code, or harmful content.
                </Typography>
                {/* <Typography variant="h5" sx={{ mt: 4 }}>
                    Contests, Sweepstakes and Promotions
                </Typography>
                <Typography variant="body1" paragraph>
                    Any contests, sweepstakes or other promotions (collectively, “Promotions”) made available through the Service may be governed by rules that are separate from these Terms & Conditions. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms and Conditions, the Promotion rules will apply.
                </Typography> */}
                {/* <Typography variant="h5" sx={{ mt: 4 }}>
                    Subscriptions
                </Typography>
                <Typography variant="body1" paragraph>
                    Some parts of the Service are billed on a subscription basis (“Subscription(s)”). You will be billed in advance on a recurring and periodic basis (“Billing Cycle”). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
                </Typography>
                <Typography variant="body1" paragraph>
                    At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or Company Name cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting Company Name customer support team.
                </Typography>
                <Typography variant="body1" paragraph>
                    A valid payment method, including credit card or PayPal, is required to process the payment for your Subscription. You shall provide Company Name with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize Company Name to charge all Subscription fees incurred through your account to any such payment instruments.
                </Typography>
                <Typography variant="body1" paragraph>
                    Should automatic billing fail to occur for any reason, Company Name will issue an electronic invoice indicating that you must proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice.
                </Typography> */}
                {/* <Typography variant="h5" sx={{ mt: 4 }}>
                    Fee Changes
                </Typography>
                <Typography variant="body1" paragraph>
                    Company Name in its sole discretion and at any time, may modify the Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.
                </Typography>
                <Typography variant="body1" paragraph>
                    Company Name will provide you with a reasonable prior notice of any change in Subscription fees to give you an opportunity to terminate your Subscription before such change becomes effective.
                </Typography>
                <Typography variant="body1" paragraph>
                    Your continued use of the Service after the Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount.
                </Typography> */}
                {/* <Typography variant="h5" sx={{ mt: 4 }}>
                    Refunds
                </Typography>
                <Typography variant="body1" paragraph>
                    Except when required by law, paid Subscription fees are non-refundable.
                </Typography> */}
                {/* <Typography variant="h5" sx={{ mt: 4 }}>
                    Content
                </Typography>
                <Typography variant="body1" paragraph>
                    Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material (“Content”). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.
                </Typography>
                <Typography variant="body1" paragraph>
                    By posting Content on or through the Service, You represent and warrant that: (i) the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity. We reserve the right to terminate the account of anyone found to be infringing on a copyright.
                </Typography>
                <Typography variant="body1" paragraph>
                    You retain any and all of your rights to any Content you submit, post or display on or through the Service and you are responsible for protecting those rights. We take no responsibility and assume no liability for Content you or any third party posts on or through the Service. However, by posting Content using the Service you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service. You agree that this license includes the right for us to make your Content available to other users of the Service, who may also use your Content subject to these Terms.
                </Typography>
                <Typography variant="body1" paragraph>
                    Company Name has the right but not the obligation to monitor and edit all Content provided by users.
                </Typography>
                <Typography variant="body1" paragraph>
                    In addition, Content found on or through this Service is the property of Company Name or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.
                </Typography> */}
                <Typography variant="h5" sx={{ mt: 4 }}>
                    Accounts
                </Typography>
                <Typography variant="body1" paragraph>
                    When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
                </Typography>
                <Typography variant="body1" paragraph>
                    You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </Typography>
                <Typography variant="body1" paragraph>
                    You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. You may not use as a username any name that is offensive, vulgar or obscene.
                </Typography>
                <Typography variant="body1" paragraph>
                    We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our sole discretion.
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    Copyright Policy
                </Typography>
                <Typography variant="body1" paragraph>
                All content and materials on MilkDelights, including but not limited to text, images, logos, graphics, and software, are the exclusive property of MilkDelights and protected under applicable copyright laws.

                </Typography>
                <Typography variant="body1" paragraph>
                    
Unauthorized reproduction, distribution, modification, or use of any content from MilkDelights without prior written consent is strictly prohibited.
                </Typography>
                <Typography variant="body1" paragraph>
                MilkDelights respects the intellectual property rights of others. If you believe that any content on our platform infringes upon your copyright, please notify us immediately at milkdelights080@gmail.com with sufficient details to investigate and resolve the matter.
                </Typography>
                {/* <Typography variant="h5" sx={{ mt: 4 }}>
                    DMCA Notice and Procedure for Copyright Infringement Claims
                </Typography>
                <Typography variant="body1" paragraph>
                    You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):
                </Typography>
                <Typography variant="body1" paragraph>
                    an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright’s interest;
                </Typography>
                <Typography variant="body1" paragraph>
                    a description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work;
                </Typography>
                <Typography variant="body1" paragraph>
                    identification of the URL or other specific location on the Service where the material that you claim is infringing is located;<br />your address, telephone number, and email address;
                </Typography>
                <Typography variant="body1" paragraph>
                    a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;
                </Typography>
                <Typography variant="body1" paragraph>
                    a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner’s behalf.
                </Typography>
                <Typography variant="body1" paragraph>
                    You can contact our Copyright Agent via email at support@dreambig.freshdesk.com.
                </Typography> */}
                <Typography variant="h5" sx={{ mt: 4 }}>
                    Intellectual Property
                </Typography>
                <Typography variant="body1" paragraph>
                All content on MilkDelights, including text, images, logos, and software, is the property of MilkDelights or its licensors and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works from any part of this application without prior written consent.
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    Acceptable Use Policy
                </Typography>
                <Typography variant="body1" paragraph>
                    We do not allow image uploads, video linking or files linking or the use of Company Name pages, resources or assets on websites that are of the following nature: Pornographic, racist, hate, defamatory/libelous, extreme violence or the promotion of violence/terrorism, self harm, narcotics, controlled substances or other products/services that present a risk to consumer safety, deceptive, misleading, fraudulent or otherwise illegal activities.
                </Typography>
                <Typography variant="body1" paragraph>
                    PLEASE NOTE THAT YOUR ACCOUNT WILL BE TERMINATED IMMEDIATELY AND WITHOUT NEGOTIATION IF YOU BREAK THIS AUP AGREEMENT.
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    Governing Law
                </Typography>
                <Typography variant="body1" paragraph>
                These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </Typography>
                {/* <Typography variant="body1" paragraph>
                    MilkDelights has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.
                </Typography>
                <Typography variant="body1" paragraph>
                    You acknowledge and agree that Company Name shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such third party web sites or services.
                </Typography> */}
                <Typography variant="body1" paragraph>
                    We strongly advise you to read the terms and conditions and privacy policies of any third party web sites or services that you visit.
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    Termination
                </Typography>
                <Typography variant="body1" paragraph>
                    We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                </Typography>
                <Typography variant="body1" paragraph>
                    If you wish to terminate your account, you may simply discontinue using the Service.
                </Typography>
                <Typography variant="body1" paragraph>
                    All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                </Typography>
                {/* <Typography variant="h5" sx={{ mt: 4 }}>
                    Indemnification
                </Typography>
                <Typography variant="body1" paragraph>
                    You agree to defend, indemnify and hold harmless Company Name and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney’s fees), resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password; b) a breach of these Terms, or c) Content posted on the Service.
                </Typography> */}
                <Typography variant="h5" sx={{ mt: 4 }}>
                    Limitation Of Liability
                </Typography>
                <Typography variant="body1" paragraph>
                MilkDelights shall not be liable for any indirect, incidental, or consequential damages arising out of your use of the application or any products purchased through the platform. <br/>

We make no warranties or representations about the accuracy or completeness of the content on MilkDelights.
                </Typography>
                {/* <Typography variant="h5" sx={{ mt: 4 }}>
                    Return Policy
                </Typography>
                <Typography variant="body1" paragraph>
                The return policy has been revised. As per the new policy, LBS doesn’t have a return policy until and unless it is related to the product quality. Hence if the customer wants to return a product because he/she doesn’t require it, in such cases we will simply deny the customer.
                </Typography> */}
                {/* <Typography variant="body1" paragraph>
                    Company Name its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
                </Typography> */}
                <Typography variant="h5" sx={{ mt: 4 }}>
                    Exclusions
                </Typography>
                <Typography variant="body1" paragraph>
                    Some jurisdictions do not allow the exclusion of certain warranties or the exclusion or limitation of liability for consequential or incidental damages, so the limitations above may not apply to you.
                </Typography>
                {/* <Typography variant="h5" sx={{ mt: 4 }}>
                    Governing Law
                </Typography>
                <Typography variant="body1" paragraph>
                    These Terms shall be governed and construed in accordance with the laws of Delaware, United States, without regard to its conflict of law provisions.
                </Typography> */}
                {/* <Typography variant="body1" paragraph>
                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.
                </Typography> */}
                <Typography variant="h5" sx={{ mt: 4 }}>
                    Changes
                </Typography>
                <Typography variant="body1" paragraph>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </Typography>
                <Typography variant="body1" paragraph>
                    By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    Contact Us
                </Typography>
                <Typography variant="body1" paragraph>
                If you have any questions or concerns about this Privacy Policy or your personal data, please contact us at: <br/>
                    MilkDelights Support Team Email: milkdelights080@gmail.com <br/>
                    Phone: +91 9958614380
                </Typography>
            </Paper>
        </Container>
        <Footer/>
        </>
    );
}
