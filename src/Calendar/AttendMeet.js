import React from 'react'

function AttendMeet() {
    return (
        <div>
          <i className="fas fa-home"></i>
            <form>
                <div className="form-group">
                    <label for="text">Meet Code</label>
                    <input name="url" type="text" class="form-control" id="text" placeholder="Example: xxx-xxxx-xxx" required />
                </div>
                <div className="form-group1">
                    <input type="submit" class="btn btn-primary" value="Schedule" id="submit" />
                </div>
            </form>
        </div>
    )
}

export default AttendMeet
