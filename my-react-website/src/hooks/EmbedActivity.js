import { Component } from "react";

class EmbedActivity extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://strava-embeds.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
    }
    
    render() {
        return (
        <div className="strava-embed-placeholder" data-embed-type="activity" data-embed-id={this.props.activityId} data-style="standard" data-from-embed="false"></div>
        );
    }
}

export default EmbedActivity;