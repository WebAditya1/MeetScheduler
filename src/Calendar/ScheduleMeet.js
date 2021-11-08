import React from 'react';

function ScheduleMeet() {
    return (
        <div>
          <form method="POST" action="/postlink" enctype="application/x-www-form-urlencoded">
        <div className="form-group">
            <label for="url">Meet Url</label>
            <input name="url" type="text" class="form-control" id="url" placeholder="https://meet.google.com/kgh-hwtg-vus" required/>
        </div>
        <div className="form-group">
            <label for="startDate">Class Start Time</label>
            <input name="startDate" type="datetime-local" class="form-control" id="startDate" required/>
        </div>
        <div className="form-group">
            <label for="endDate">Class End Time</label>
            <input name="endDate" type="datetime-local" class="form-control" id="endDate" required/>
        </div>
        <div className="form-group">
            <input type="submit" class="btn btn-primary" value="Schedule" id="submit"/>
        </div>
    </form>  
        </div>
    )
}

export default ScheduleMeet;
