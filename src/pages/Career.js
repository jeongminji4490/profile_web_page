import Typography from "../components/Typography";
import Flex from "../components/Flex";
import DashedBox from "../components/DashedBox";
import BulletList from "../components/BulletList";
import { useTranslation } from "react-i18next";

function Career() {
    const { t } = useTranslation('career');

    return (
        <Flex align="start">
            <Typography size="lg">
                Ge Appliances, a Haier Company
            </Typography>
            <Typography size="md" variant="title" color="lightGray">
                Associate Software Engineer (2023.11-present)
            </Typography>
            <DashedBox>
                <Typography size="sm" variant="body" style={{ marginBottom: '15px' }}>
                    SmartHQ Management CI/CD (2026.01 - 2026.02)
                </Typography>
                <Typography size="xs" variant="semiTitle" style={{ marginBottom: '15px' }}>
                    [ Github Actions, Bash ]
                </Typography>

                <BulletList>
                    <span>{t('career_1_1')}</span>
                    <span>{t('career_1_2')}</span>
                </BulletList>

                <Typography size="sm" variant="body" style={{ marginTop: '15px', marginBottom: '15px' }}>
                    SmartHQ Management Navigation Refactoring (2025.10 - 2025.12)
                </Typography>
                <Typography size="xs" variant="semiTitle" style={{ marginBottom: '15px' }}>
                    [ Flutter ]
                </Typography>

                <BulletList>
                    <span>{t('career_2_1')}</span>
                    <span>{t('career_2_2')}</span>
                    <span>{t('career_2_3')}</span>
                </BulletList>

                <Typography size="sm" variant="body" style={{ marginTop: '15px', marginBottom: '15px' }}>
                    SmartHQ Management NPI (2024.07 - present)
                </Typography>
                <Typography size="xs" variant="semiTitle" style={{ marginBottom: '15px' }}>
                    [ Flutter, GetX, Riverpod ]
                </Typography>


                <BulletList>
                    <span>{t('career_3_1')}</span>
                </BulletList>
            </DashedBox>

            <Typography size="lg">
                Ge Appliances, a Haier Company
            </Typography>
            <Typography size="md" variant="title" color="lightGray">
                Software Intern (2022.09 - 2023.11)
            </Typography>

            <DashedBox>
                <Typography size="sm" variant="body" style={{ marginBottom: '15px' }}>
                    SmartHQ Home Cooking Assistant (2023.10 - 2024.01)
                </Typography>
                <Typography size="xs" variant="semiTitle" style={{ marginBottom: '15px' }}>
                    [ Flutter, Cubit ]
                </Typography>

                <BulletList>
                    <span>{t('career_4_1')}</span>
                    <span>{t('career_4_2')}</span>
                </BulletList>

                <Typography size="sm" variant="body" style={{ marginTop: '15px', marginBottom: '15px' }}>
                    SmartHQ Home CI (2023.07 - 2023.11)
                </Typography>
                <Typography size="xs" variant="semiTitle" style={{ marginBottom: '15px' }}>
                    [ GitHub Actions, Bash ]
                </Typography>

                <BulletList>
                    <span>{t('career_5_1')}</span>
                    <span>{t('career_5_2')}</span>
                </BulletList>
            </DashedBox>
        </Flex>
    );
}

export default Career;