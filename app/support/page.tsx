import type { Metadata } from "next";
import Link from "next/link";
import { privacyUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Support and help for Bikey - Bilingual Typing. Setup guide, FAQ, and contact information.",
};

export default function SupportPage() {
  return (
    <article className="page">
      <div className="card">
        <p className="eyebrow">Support</p>
        <h1>Bikey Support</h1>
        <p className="lead">
          Bikey is a bilingual keyboard app for iPhone that lets you type
          Japanese and English together without manually switching input modes.
          If you need help, you&apos;re in the right place.
        </p>

        <h2>How to Enable Bikey</h2>
        <p>
          Bikey is a custom iOS keyboard. Follow these steps to add it to your
          device:
        </p>
        <ol>
          <li>Download and open the Bikey app from the App Store.</li>
          <li>
            Follow the in-app setup guide on the home screen — it will walk
            you through each step.
          </li>
          <li>Open the <strong>Settings</strong> app on your iPhone.</li>
          <li>
            Go to <strong>General → Keyboard → Keyboards</strong>.
          </li>
          <li>
            Tap <strong>Add New Keyboard…</strong> and select{" "}
            <strong>Bikey</strong> from the list.
          </li>
          <li>
            Open any app with a text field (Messages, Notes, etc.) and tap the{" "}
            <strong>🌐 globe icon</strong> on the system keyboard to switch to
            Bikey.
          </li>
        </ol>

        <h2>Using the Bilingual Keyboard</h2>
        <p>
          Bikey automatically detects whether you are typing Japanese romaji or
          English as you type — no manual mode switching is needed.
        </p>
        <ul>
          <li>
            Type romaji and English mixed together in a single unspaced run,
            for example <em>kyounomeetingha3jini</em> or{" "}
            <em>korekara we can get in the car</em>.
          </li>
          <li>
            Bikey segments your input into Japanese and English spans and
            converts Japanese spans to kana / kanji automatically.
          </li>
          <li>
            Tap a conversion candidate in the suggestion bar to accept it, or
            continue typing to refine.
          </li>
        </ul>

        <h2>Allow Full Access</h2>
        <p>
          Bikey&apos;s core typing and conversion features work without Full
          Access. You can use the keyboard immediately after adding it.
        </p>
        <p>
          Full Access is optional and only needed if you want to sync your
          custom dictionary with your Bikey account across devices. If you
          enable it, Bikey does not collect, store, sell, or share what you
          type. See our{" "}
          <Link href="/privacy">Privacy Policy</Link> for full details.
        </p>
        <p>
          To enable Full Access: <strong>Settings → General → Keyboard →
          Keyboards → Bikey</strong>, then turn on{" "}
          <strong>Allow Full Access</strong>.
        </p>

        <h2>Frequently Asked Questions</h2>

        <p><strong>Bikey doesn&apos;t appear in my keyboard list.</strong></p>
        <p>
          Try closing and reopening the Bikey app, then check{" "}
          <em>Settings → General → Keyboard → Keyboards</em> again. If it
          still doesn&apos;t appear, restart your iPhone and repeat the setup
          steps above.
        </p>

        <p><strong>The keyboard is slow or unresponsive.</strong></p>
        <p>
          Make sure you are running the latest version of Bikey from the App
          Store. If the issue continues, try removing and re-adding the
          keyboard in iOS Settings.
        </p>

        <p><strong>Conversions are incorrect or unexpected.</strong></p>
        <p>
          Bikey uses an on-device language model to classify Japanese and
          English spans. Accuracy improves with longer input. Short or
          ambiguous tokens (for example, &quot;ha&quot; or &quot;no&quot;) can
          occasionally be misclassified. Try typing a few more characters
          before committing.
        </p>

        <p><strong>The globe key is not visible.</strong></p>
        <p>
          The globe key only appears when more than one keyboard is enabled on
          your device. If you see only a Bikey key, go to{" "}
          <em>Settings → General → Keyboard → Keyboards</em> and confirm that
          at least two keyboards are listed.
        </p>

        <p><strong>I want to delete my account or data.</strong></p>
        <p>
          You can sign out from the Profile tab in the app at any time. To
          request full account deletion, email us at the address below with the
          subject line &quot;Delete my account&quot; and we will process your
          request promptly.
        </p>

        <h2>Troubleshooting Checklist</h2>
        <ul>
          <li>Update Bikey to the latest version from the App Store.</li>
          <li>Restart the Bikey app and check iOS Settings again.</li>
          <li>Restart your iPhone.</li>
          <li>
            Remove and re-add the keyboard:{" "}
            <em>
              Settings → General → Keyboard → Keyboards → Edit → delete Bikey,
              then add it again
            </em>
            .
          </li>
          <li>
            If the problem persists, contact us — we respond within 2 business
            days.
          </li>
        </ul>

        <h2>Contact Support</h2>
        <p>
          For help, feedback, feature requests, or bug reports, email us at:
        </p>
        <p>
          <a className="contact" href="mailto:itsukison00@gmail.com">
            itsukison00@gmail.com
          </a>
        </p>
        <p>
          Please include your iPhone model, iOS version, and a short
          description of the issue. We aim to respond within 2 business days.
        </p>

        <h2>Privacy Policy</h2>
        <p>
          Learn how Bikey handles your data — including our commitment to never
          collecting what you type:
        </p>
        <p>
          <Link className="contact" href="/privacy">
            {privacyUrl}
          </Link>
        </p>
      </div>
    </article>
  );
}
