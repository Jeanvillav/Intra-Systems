const fs = require('fs');
let code = fs.readFileSync('src/components/BookingSection.tsx', 'utf8');

code = code.replace(
  "export default function BookingSection() {",
  "import { useParams } from 'next/navigation';\nexport default function BookingSection() {"
);

code = code.replace(
  "  const t = useTranslations('BookingSection');\n  const [isMounted, setIsMounted] = useState(false);",
  "  const t = useTranslations('BookingSection');\n  const params = useParams();\n  const currentLocale = (params?.locale as string) || 'en';\n  const [isMounted, setIsMounted] = useState(false);"
);

fs.writeFileSync('src/components/BookingSection.tsx', code);
