import Typography from "../components/Typography";
import Flex from "../components/Flex";
import DashedBox from "../components/DashedBox";
import BulletList from "../components/BulletList";

function Career() {
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
                    <span>Implemented an initial CI/CD pipeline.</span>
                    <span>Leveraged GitHub Actions and Bash to automate the entire build, binary creation, tagging, release note creation, and upload process </span>
                </BulletList>

                <Typography size="sm" variant="body" style={{ marginTop: '15px', marginBottom: '15px' }}>
                    SmartHQ Management Navigation Refactoring (2025.10 - 2025.12)
                </Typography>
                <Typography size="xs" variant="semiTitle" style={{ marginBottom: '15px' }}>
                    [ Flutter ]
                </Typography>

                <BulletList>
                    <span>Designed and implemented a <strong>GoRouter-based</strong> app-wide routing structure.</span>
                    <span>Improved navigation flexibility and intuition by transitioning from imperative to declarative routing.</span>
                    <span>Resolved data loss issues on web platforms, ensuring consistent state persistence even after browser refreshes.</span>
                </BulletList>

                <Typography size="sm" variant="body" style={{ marginTop: '15px', marginBottom: '15px' }}>
                    SmartHQ Management NPI (2024.07 - present)
                </Typography>
                <Typography size="xs" variant="semiTitle" style={{ marginBottom: '15px' }}>
                    [ Flutter, GetX, Riverpod ]
                </Typography>


                <BulletList>
                    <span>Contributed to the development of released or upcoming features.</span>
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
                    <span>Implemented voice chat through STT/TTS package integration.</span>
                    <span>Implemented app UI based on the wireframe.</span>
                </BulletList>

                <Typography size="sm" variant="body" style={{ marginTop: '15px', marginBottom: '15px' }}>
                    SmartHQ Home CI (2023.07 - 2023.11)
                </Typography>
                <Typography size="xs" variant="semiTitle" style={{ marginBottom: '15px' }}>
                    [ GitHub Actions, Bash ]
                </Typography>

                <BulletList>
                    <span>Built a CI environment that enables PR-level build verification for all mobile platforms.</span>
                    <span>Resolved build issues caused by inconsistencies in local build environments between team members through CI environment maintenance.</span>
                </BulletList>
            </DashedBox>
        </Flex>
    );
}

export default Career;