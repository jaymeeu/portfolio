const ContentInfo = ({ text, header, title, flex_size, color }) => (
    <div className="home_info" style={{ flex: flex_size, color: color }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            <div className="text_size">
                {text}
            </div>
            <div className="header_size">
                {header}
            </div>

            <div className="title_size">
                {title}
            </div>

        </div>
    </div>
)

export default ContentInfo