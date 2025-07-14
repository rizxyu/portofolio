const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <aside>
                <p>Copyright © {currentYear} - All right reserved by Rizky Adi</p>
            </aside>
        </footer>
    );
};

export default Footer;