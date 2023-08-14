import FormGroup from './FormGroup';
import { Form, Link, useNavigation } from 'react-router-dom';

const PostForm = ({ users, defaultValues = {} }) => {
  const { state } = useNavigation();
  const isSubmiting = state === 'submitting';
  return (
    <Form method="post">
      <div className="form-row">
        <FormGroup>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={defaultValues.title}
          />
          {/* <div className="error-message">Required</div> */}
        </FormGroup>
        <FormGroup>
          <label htmlFor="userId">Author</label>
          <select name="userId" id="userId">
            {users.map((user) => (
              <option
                key={user.id}
                value={user.id}
                defaultValue={defaultValues.id}
              >
                {user.name}
              </option>
            ))}
          </select>
        </FormGroup>
      </div>
      <div className="form-row">
        <FormGroup>
          <label htmlFor="body">Body</label>
          <textarea
            name="body"
            id="body"
            defaultValue={defaultValues.body}
          ></textarea>
        </FormGroup>
      </div>
      <div className="form-row form-btn-row">
        <Link className="btn btn-outline" to={'..'}>
          Cancel
        </Link>
        <button disabled={isSubmiting} className="btn">
          Save
        </button>
      </div>
    </Form>
  );
};

export default PostForm;
