import avatarURL from './images/shiv.jpeg';

export default function ProfileCard() {
    return (
        <div className="profile-card">
            <img src={avatarURL} alt="Shiv" className="avatar"/>
            <p className="name">Shiv Deepak</p>
            <p className="role">Founder & CEO</p>
            <p className="company">Aeroh, Inc.</p>
            <div className="social">
                <a href="https://shivdeepak.com/" className="icon web" target="_blank" rel="noreferrer"></a>
                <a href="https://shivdeepak.com/" className="icon email" target="_blank" rel="noreferrer"></a>
                <a href="https://shivdeepak.com/" className="icon phone" target="_blank" rel="noreferrer"></a>
                <a href="https://shivdeepak.com/" className="icon calendar" target="_blank" rel="noreferrer"></a>
            </div>
        </div>
    )
}
