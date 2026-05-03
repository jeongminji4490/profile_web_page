import Typography from "../components/Typography";
import Flex from "../components/Flex";
import BulletList from "../components/BulletList";
import { useTranslation } from "react-i18next";
import Divider from "../components/Divider";

export default function Career() {
    const { t } = useTranslation('career');

    return (
        <Flex align="start" gap="10px">
            <Typography size="lg" variant="title">
                Ge Appliances, a Haier Company
            </Typography>
            <Typography size="md" variant="semiTitle">
                Associate Software Engineer (2023.11-present)
            </Typography>
            <Typography size="sm" variant="semiTitle">
                1. SmartHQ Management Navigation Refactoring (2025.11 - 2026.1)
            </Typography>
            <Typography size="xs">
                [ Flutter, Riverpod, GoRouter ]
            </Typography>

            <BulletList>
                <span>{t('career_2_1')}</span>
                <span>{t('career_2_2')}</span>
                <span>{t('career_2_3')}</span>
                <span>{t('career_2_4')}</span>
            </BulletList>

            <Typography size="sm" variant="semiTitle">
                2. SmartHQ Management CI/CD (2025.08 - 2025.09)
            </Typography>
            <Typography size="xs">
                [ Github Actions, Bash ]
            </Typography>

            <BulletList>
                <span>{t('career_1_1')}</span>
                <span>{t('career_1_2')}</span>
                <span>{t('career_1_3')}</span>
            </BulletList>

            <Typography size="sm" variant="semiTitle">
                3. SmartHQ Management NPI (2024.07 - present)
            </Typography>
            <Typography size="xs">
                [ Flutter, GetX, Riverpod ]
            </Typography>
            <BulletList>
                <span>{t('career_3_1')}</span>
            </BulletList>

            <Divider />

            <Typography size="lg" variant="title">
                Ge Appliances, a Haier Company
            </Typography>

            <Typography size="md" variant="semiTitle">
                Software Intern (2022.09 - 2023.11)
            </Typography>

            {/* <DashedBox> */}
            <Typography size="sm" variant="semiTitle">
                1. SmartHQ Home Cooking Assistant (2023.10 - 2024.01)
            </Typography>
            <Typography size="xs">
                [ Flutter, Cubit ]
            </Typography>

            <BulletList>
                <span>{t('career_4_1')}</span>
                <span>{t('career_4_2')}</span>
            </BulletList>

            <Typography size="sm" variant="semiTitle">
                2. SmartHQ Home CI (2023.07 - 2023.11)
            </Typography>
            <Typography size="xs">
                [ GitHub Actions, Bash ]
            </Typography>

            <BulletList>
                <span>{t('career_5_1')}</span>
                <span>{t('career_5_2')}</span>
            </BulletList>
            {/* </DashedBox> */}
        </Flex>
    );
}